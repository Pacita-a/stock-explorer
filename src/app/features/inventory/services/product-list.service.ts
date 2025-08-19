import { Injectable } from '@angular/core';
import { ProductListState } from '../stores/product-list/product-list.reducer';
import { Store } from '@ngrx/store';
import { filter, Observable } from 'rxjs';
import * as ProductListSelector from '../stores/product-list/product-list.selectors';
import { Product } from 'src/app/core/models/product/product.model';
import * as ProductListActions from '../stores/product-list/product-list.actions';

@Injectable({
  providedIn: 'root',
})
export class ProductListService {
  constructor(private store: Store<ProductListState>) {}

  public fetchPendingProducts(): void {
    this.store.dispatch(ProductListActions.fetchPending());
  }

  public getProducts(): Observable<Product[]> {
    return this.store
      .select(ProductListSelector.getProductList)
      .pipe(filter((val) => !!val));
  }

  public getTotalProducts(): Observable<number> {
    return this.store.select(ProductListSelector.selectTotalProducts);
  }

  public getLowStockProducts(): Observable<Product[]> {
    return this.store
      .select(ProductListSelector.selectLowStockProducts)
      .pipe(filter((val) => !!val));
  }

  public getTotalInventoryValue(): Observable<number> {
    return this.store
      .select(ProductListSelector.selectTotalInventoryValue)
      .pipe(filter((val) => !!val));
  }
}
