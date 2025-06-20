'use client'

import { useState } from 'react'
import SearchBar from '@/components/SearchBar'
import ProductGrid from '@/components/ProductGrid'
import SearchFilters from '@/components/SearchFilters'
import { Product, SearchFilters as SearchFiltersType } from '@/types/product'

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)
  const [searchTime, setSearchTime] = useState<number | null>(null)
  const [filters, setFilters] = useState<SearchFiltersType>({})

  const handleSearch = async (query: string) => {
    setLoading(true)
    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, filters })
      })
      
      const data = await response.json()
      setProducts(data.products)
      setSearchTime(data.searchTime)
    } catch (error) {
      console.error('Search error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            AI-Powered Product Search
          </h1>
          <p className="text-lg text-gray-600">
            Powered by TurboPuffer - Find products with natural language and semantic search
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <SearchBar onSearch={handleSearch} loading={loading} />
          
          {searchTime && (
            <div className="text-sm text-gray-500 mt-2">
              Found {products.length} products in {searchTime}ms
            </div>
          )}
          
          <div className="flex gap-8 mt-8">
            <div className="w-64 flex-shrink-0">
              <SearchFilters filters={filters} onFiltersChange={setFilters} />
            </div>
            
            <div className="flex-1">
              <ProductGrid products={products} loading={loading} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
