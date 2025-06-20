# TurboPuffer E-commerce Search Engine

An AI-powered product search application showcasing TurboPuffer's vector search capabilities. This demo features semantic search, natural language queries, and advanced filtering - perfect for demonstrating TurboPuffer's performance and cost advantages.

## 🚀 Key Features

- **Semantic Search**: Find products using natural language queries
- **Vector Embeddings**: Powered by OpenAI's text-embedding-3-small
- **Advanced Filters**: Category, brand, price range, rating, and stock status
- **Real-time Performance**: Sub-100ms search responses
- **Scalable Architecture**: Built to handle millions of products
- **Modern UI**: Clean, responsive interface with Tailwind CSS

## 🏗️ Architecture

- **Frontend**: Next.js 15 with TypeScript and Tailwind CSS
- **Vector Search**: TurboPuffer for semantic product search
- **Embeddings**: OpenAI API for text-to-vector conversion
- **Data Model**: Structured product data with rich attributes

## 📊 TurboPuffer Advantages Demonstrated

1. **Cost Efficiency**: 10x cheaper than traditional search solutions
2. **Scale**: Handles billions of documents (we're starting with sample data)
3. **Speed**: Vector search performance p50=16ms, full-text p50=402ms
4. **Hybrid Search**: Combines vector and attribute-based filtering
5. **Serverless**: No infrastructure management required

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+ installed
- TurboPuffer API key ([Get one here](https://turbopuffer.com))
- OpenAI API key for embeddings

### Installation

1. **Configure environment variables**:
   Update `.env.local` with your API keys:
   ```
   TURBOPUFFER_API_KEY=your_turbopuffer_api_key_here
   OPENAI_API_KEY=your_openai_api_key_here
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Ingest sample data**:
   ```bash
   node scripts/ingestData.js
   ```

5. **Open your browser**:
   Navigate to `http://localhost:3000`

## 🔍 Demo Search Queries

Try these example searches to see semantic search in action:

- "comfortable running shoes for women"
- "wireless headphones with noise canceling"  
- "organic cotton t-shirt under $30"
- "high-rated laptop for programming"
- "premium smartphone with good camera"

## 🏢 Business Value Proposition

### For TurboPuffer Team
This demo showcases how TurboPuffer enables:
- **Developer Experience**: Simple API, quick integration
- **Performance**: Fast queries at scale
- **Cost Savings**: Significant reduction vs. traditional solutions
- **Flexibility**: Hybrid vector + attribute filtering

### For End Users
- **Better Discovery**: Find products through natural language
- **Relevant Results**: Semantic understanding improves accuracy
- **Fast Response**: Sub-second search results
- **Rich Filtering**: Combine semantic and structured search

## 🧪 Technical Implementation

### Data Flow
1. **Ingestion**: Products → OpenAI embeddings → TurboPuffer
2. **Search**: Query → OpenAI embedding → TurboPuffer query → Results
3. **Filtering**: Combine vector similarity with attribute filters

### Key Files
- `src/lib/turbopuffer.ts` - TurboPuffer client configuration
- `src/lib/embeddings.ts` - OpenAI embedding generation
- `src/app/api/search/route.ts` - Search API endpoint
- `src/app/api/ingest/route.ts` - Data ingestion endpoint
- `src/components/` - React UI components

## 📈 Scaling Considerations

This demo is designed to showcase scalability:
- **Vector Dimensionality**: 1536-dim embeddings (OpenAI standard)
- **Batch Ingestion**: Handles bulk product uploads
- **Query Optimization**: Efficient filtering and ranking
- **Caching**: Ready for Redis/memory caching layer

## 🎯 Next Steps

Potential enhancements to further demonstrate TurboPuffer:
- [ ] Image similarity search (visual embeddings)
- [ ] Real-time analytics dashboard
- [ ] A/B testing framework
- [ ] Multi-language support
- [ ] Recommendation engine integration

---

**Built with ❤️ to showcase TurboPuffer's capabilities**

This project demonstrates why TurboPuffer is the ideal choice for modern search applications - combining performance, cost-efficiency, and developer experience in one powerful platform.
