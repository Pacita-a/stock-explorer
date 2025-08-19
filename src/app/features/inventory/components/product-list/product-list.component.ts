import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from 'src/app/core/models/product/product.model';
import { ProductListService } from '../../services/product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products$: Observable<Product[]>;

  constructor(private productListService: ProductListService) {
    this.products$ = this.productListService
      .getProducts()
      .pipe(map((products) => [...products]));
  }
}
