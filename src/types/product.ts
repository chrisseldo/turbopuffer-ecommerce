export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  brand: string;
  imageUrl: string;
  tags: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  createdAt: string;
}

export interface ProductVector {
  id: string;
  vector: number[];
  attributes: {
    name: string;
    description: string;
    price: number;
    category: string;
    brand: string;
    imageUrl: string;
    tags: string;
    rating: number;
    reviewCount: number;
    inStock: boolean;
    createdAt: string;
  };
}

export interface SearchFilters {
  category?: string;
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  minRating?: number;
  inStock?: boolean;
}

export interface SearchResult {
  products: Product[];
  totalCount: number;
  searchTime: number;
}