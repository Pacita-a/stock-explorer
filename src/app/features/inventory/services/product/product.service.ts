import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductState } from '../../stores/product/product.reducer';
import * as ProductActions from '../../stores/product/product.actions';
import { Product } from 'src/app/core/models/product/product.model';
import { Observable } from 'rxjs';
import * as ProductSelector from '../../stores/product/product.selectors';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private store: Store<ProductState>) {}

  public fetchPendingCreateProduct(product: Product): void {
    this.store.dispatch(ProductActions.fetchPendingCreate({ product }));
  }

  public getProductState(): Observable<ProductState> {
    return this.store.select(ProductSelector.getProductState);
  }

  public clearState(): void {
    this.store.dispatch(ProductActions.clearState());
  }

}
