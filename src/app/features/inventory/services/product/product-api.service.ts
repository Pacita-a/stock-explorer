import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/core/models/product/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductApiService {
  constructor() {}

  postProduct(product: Product): Observable<Product> {
    return of(product);
  }
}
