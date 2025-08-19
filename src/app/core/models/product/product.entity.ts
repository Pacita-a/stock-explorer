export interface ProductEntity {
  active: boolean;
  id: string;
  product_name: string;
  stock: number;
  price: number;
  category: string;
  subcategory: string;
  description?: string;
}
