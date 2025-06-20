import { Turbopuffer } from '@turbopuffer/turbopuffer';

if (!process.env.TURBOPUFFER_API_KEY) {
  throw new Error('TURBOPUFFER_API_KEY is required');
}

export const turbopuffer = new Turbopuffer({
  apiKey: process.env.TURBOPUFFER_API_KEY,
  region: process.env.TURBOPUFFER_REGION,
});

export const NAMESPACE = 'ecommerce_products';