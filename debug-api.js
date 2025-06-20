// Using built-in fetch in Node.js 18+

async function debugAPI() {
  try {
    console.log('Testing API endpoint...');
    
    const testProduct = {
      id: 'debug-test',
      name: 'Debug Test Product',
      description: 'Testing the API',
      price: 10,
      category: 'Test',
      brand: 'Test',
      imageUrl: 'test.jpg',
      tags: ['debug'],
      rating: 5,
      reviewCount: 1,
      inStock: true,
      createdAt: '2024-01-01T00:00:00Z'
    };
    
    const response = await fetch('http://localhost:3000/api/ingest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ products: [testProduct] })
    });
    
    console.log('Response status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers));
    
    const text = await response.text();
    console.log('Response body:', text);
    
    if (!response.ok) {
      console.error('API returned error status:', response.status);
    }
    
  } catch (error) {
    console.error('Error calling API:', error);
  }
}

debugAPI();