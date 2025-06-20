const fs = require('fs')
const path = require('path')

const sampleProducts = [
  {
    id: '1',
    name: 'Apple iPhone 15 Pro',
    description: 'Latest iPhone with A17 Pro chip, titanium design, and advanced camera system. Perfect for photography and performance.',
    price: 999,
    category: 'Electronics',
    brand: 'Apple',
    imageUrl: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400',
    tags: ['smartphone', 'ios', 'camera', 'premium'],
    rating: 4.8,
    reviewCount: 1247,
    inStock: true,
    createdAt: '2024-01-15T00:00:00Z'
  },
  {
    id: '2',
    name: 'Nike Air Max 270 Running Shoes',
    description: 'Comfortable running shoes with Air Max cushioning technology. Great for daily runs and casual wear.',
    price: 150,
    category: 'Sports & Outdoors',
    brand: 'Nike',
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    tags: ['running', 'shoes', 'comfortable', 'athletic'],
    rating: 4.5,
    reviewCount: 892,
    inStock: true,
    createdAt: '2024-01-10T00:00:00Z'
  },
  {
    id: '3',
    name: 'Sony WH-1000XM5 Wireless Headphones',
    description: 'Industry-leading noise canceling wireless headphones with premium sound quality and all-day comfort.',
    price: 399,
    category: 'Electronics',
    brand: 'Sony',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    tags: ['headphones', 'wireless', 'noise-canceling', 'premium'],
    rating: 4.7,
    reviewCount: 2156,
    inStock: true,
    createdAt: '2024-01-08T00:00:00Z'
  },
  {
    id: '4',
    name: 'Organic Cotton Basic T-Shirt',
    description: 'Soft, breathable organic cotton t-shirt perfect for everyday wear. Available in multiple colors.',
    price: 25,
    category: 'Clothing',
    brand: 'EcoWear',
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
    tags: ['t-shirt', 'organic', 'cotton', 'basic'],
    rating: 4.3,
    reviewCount: 456,
    inStock: true,
    createdAt: '2024-01-12T00:00:00Z'
  },
  {
    id: '5',
    name: 'Dell XPS 13 Laptop',
    description: 'Powerful ultrabook with Intel Core i7 processor, 16GB RAM, and stunning InfinityEdge display. Perfect for programming and productivity.',
    price: 1299,
    category: 'Electronics',
    brand: 'Dell',
    imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400',
    tags: ['laptop', 'programming', 'ultrabook', 'productivity'],
    rating: 4.6,
    reviewCount: 743,
    inStock: true,
    createdAt: '2024-01-05T00:00:00Z'
  },
  {
    id: '6',
    name: 'Instant Pot Duo 7-in-1 Electric Pressure Cooker',
    description: 'Multi-functional electric pressure cooker that replaces 7 kitchen appliances. Perfect for quick, healthy meals.',
    price: 89,
    category: 'Home & Kitchen',
    brand: 'Instant Pot',
    imageUrl: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
    tags: ['kitchen', 'cooking', 'pressure-cooker', 'meal-prep'],
    rating: 4.6,
    reviewCount: 15420,
    inStock: true,
    createdAt: '2024-01-20T00:00:00Z'
  },
  {
    id: '7',
    name: 'Levi\'s 501 Original Fit Jeans',
    description: 'Classic straight leg jeans with authentic vintage styling. The original blue jean since 1873.',
    price: 59,
    category: 'Clothing',
    brand: 'Levi\'s',
    imageUrl: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400',
    tags: ['jeans', 'denim', 'classic', 'casual'],
    rating: 4.4,
    reviewCount: 8934,
    inStock: true,
    createdAt: '2024-01-18T00:00:00Z'
  },
  {
    id: '8',
    name: 'Kindle Paperwhite E-Reader',
    description: 'Waterproof e-reader with 6.8" display and adjustable warm light. Perfect for reading anywhere.',
    price: 139,
    category: 'Electronics',
    brand: 'Amazon',
    imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400',
    tags: ['e-reader', 'books', 'reading', 'portable'],
    rating: 4.5,
    reviewCount: 45200,
    inStock: true,
    createdAt: '2024-01-16T00:00:00Z'
  },
  {
    id: '9',
    name: 'Stanley Adventure Quencher Travel Tumbler',
    description: 'Insulated stainless steel tumbler that keeps drinks cold for 11+ hours and hot for 7+ hours.',
    price: 45,
    category: 'Home & Kitchen',
    brand: 'Stanley',
    imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
    tags: ['tumbler', 'insulated', 'travel', 'hydration'],
    rating: 4.7,
    reviewCount: 23450,
    inStock: true,
    createdAt: '2024-01-14T00:00:00Z'
  },
  {
    id: '10',
    name: 'IKEA BEKANT Office Desk',
    description: 'Simple, functional office desk with clean lines. Perfect for home office or study space.',
    price: 179,
    category: 'Furniture',
    brand: 'IKEA',
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400',
    tags: ['desk', 'office', 'furniture', 'workspace'],
    rating: 4.2,
    reviewCount: 3420,
    inStock: true,
    createdAt: '2024-01-11T00:00:00Z'
  },
  {
    id: '11',
    name: 'Adidas Ultraboost 22 Running Shoes',
    description: 'Premium running shoes with responsive Boost midsole and flexible Primeknit upper.',
    price: 190,
    category: 'Sports & Outdoors',
    brand: 'Adidas',
    imageUrl: 'https://images.unsplash.com/photo-1608667508764-33cf0726ef4a?w=400',
    tags: ['running', 'shoes', 'boost', 'performance'],
    rating: 4.6,
    reviewCount: 2890,
    inStock: true,
    createdAt: '2024-01-09T00:00:00Z'
  },
  {
    id: '12',
    name: 'Nintendo Switch OLED Model',
    description: 'Gaming console with vivid 7-inch OLED screen. Play at home or on the go.',
    price: 349,
    category: 'Electronics',
    brand: 'Nintendo',
    imageUrl: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400',
    tags: ['gaming', 'console', 'portable', 'nintendo'],
    rating: 4.8,
    reviewCount: 8760,
    inStock: true,
    createdAt: '2024-01-07T00:00:00Z'
  },
  {
    id: '13',
    name: 'Vitamix A3500 Ascent Series Blender',
    description: 'Professional-grade blender with smart technology and 64-oz container. Perfect for smoothies and more.',
    price: 449,
    category: 'Home & Kitchen',
    brand: 'Vitamix',
    imageUrl: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400',
    tags: ['blender', 'smoothies', 'kitchen', 'healthy'],
    rating: 4.7,
    reviewCount: 12340,
    inStock: true,
    createdAt: '2024-01-06T00:00:00Z'
  },
  {
    id: '14',
    name: 'Patagonia Houdini Windbreaker Jacket',
    description: 'Ultralight windbreaker made from recycled materials. Perfect for outdoor adventures.',
    price: 99,
    category: 'Clothing',
    brand: 'Patagonia',
    imageUrl: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5a?w=400',
    tags: ['jacket', 'windbreaker', 'outdoor', 'sustainable'],
    rating: 4.5,
    reviewCount: 1890,
    inStock: true,
    createdAt: '2024-01-04T00:00:00Z'
  },
  {
    id: '15',
    name: 'Tesla Model Y Performance Wheel Set',
    description: 'Uberturbine 21" wheels designed specifically for Tesla Model Y Performance. Lightweight and aerodynamic.',
    price: 2890,
    category: 'Automotive',
    brand: 'Tesla',
    imageUrl: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400',
    tags: ['wheels', 'tesla', 'automotive', 'performance'],
    rating: 4.4,
    reviewCount: 567,
    inStock: false,
    createdAt: '2024-01-03T00:00:00Z'
  }
]

async function ingestData() {
  try {
    console.log('Ingesting sample data...')
    
    const response = await fetch('http://localhost:3000/api/ingest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ products: sampleProducts })
    })
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const result = await response.json()
    console.log('Success:', result)
    
  } catch (error) {
    console.error('Error ingesting data:', error)
    process.exit(1)
  }
}

ingestData()