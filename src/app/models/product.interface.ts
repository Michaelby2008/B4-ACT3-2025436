export interface Product {
  id: number;
  name: string;
  price: number;
  quantity?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}