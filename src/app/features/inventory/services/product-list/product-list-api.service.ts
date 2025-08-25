import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/core/models/product/product.model';
import { productsMock } from 'src/assets/mocks/products';

@Injectable({
  providedIn: 'root',
})
export class ProductListApiService {
  constructor() {}

  getProductList(): Observable<Product[]> {
    return of(productsMock);
  }
}
