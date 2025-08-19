export interface Product {
  active: boolean;
  id: string;
  productName: string;
  stock: number;
  price: number;
  category: string;
  subcategory: string;
  description?: string;
}
