import { NextRequest, NextResponse } from 'next/server'
import { turbopuffer, NAMESPACE } from '@/lib/turbopuffer'
import { generateEmbedding, createProductSearchText } from '@/lib/embeddings'
import { Product, ProductVector } from '@/types/product'

export async function POST(request: NextRequest) {
  try {
    const { products }: { products: Product[] } = await request.json()
    
    if (!products || products.length === 0) {
      return NextResponse.json({ error: 'Products array is required' }, { status: 400 })
    }

    const vectors: ProductVector[] = []
    
    for (const product of products) {
      const searchText = createProductSearchText(product)
      const embedding = await generateEmbedding(searchText)
      
      vectors.push({
        id: product.id,
        vector: embedding
      })
    }
    
    const upsertData = {
      namespace: NAMESPACE,
      distance_metric: 'cosine_distance',
      upsert_rows: vectors.map(v => ({
        id: v.id,
        vector: v.vector
      }))
    }
    
    // Debug removed - causing issues
    
    await turbopuffer.namespace(NAMESPACE).write(upsertData)
    
    return NextResponse.json({
      message: `Successfully ingested ${vectors.length} products`,
      count: vectors.length
    })
    
  } catch (error) {
    console.error('Ingest API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    )
  }
}