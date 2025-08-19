import { Mapper } from 'src/app/shared/base/mapper';
import { ProductEntity } from './product.entity';
import { Product } from './product.model';

export class ProductMapper extends Mapper<ProductEntity, Product> {
  mapFrom(param: ProductEntity): Product {
    return {
      active: param.active,
      id: param.id,
      productName: param.product_name,
      stock: param.stock,
      price: param.price,
      category: param.category,
      subcategory: param.subcategory,
      description: param.description,
    };
  }

  mapTo(param: Product): ProductEntity {
    return {
      active: param.active,
      id: param.id,
      product_name: param.productName,
      stock: param.stock,
      price: param.price,
      category: param.category,
      subcategory: param.subcategory,
      description: param.description,
    };
  }
}
