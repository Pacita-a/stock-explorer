import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromProductList from './product-list.reducer';

export const selectProductListState =
  createFeatureSelector<fromProductList.ProductListState>(
    fromProductList.productListFeatureKey
  );

export const getProductList = createSelector(
  selectProductListState,
  (state: fromProductList.ProductListState) => state.productList
);

export const selectTotalProducts = createSelector(
  selectProductListState,
  (state) => state.productList.length
);

export const selectLowStockProducts = createSelector(
  selectProductListState,
  (state) => state.productList.filter((p) => p.stock < 5)
);

export const selectTotalInventoryValue = createSelector(
  selectProductListState,
  (state) => state.productList.reduce((acc, p) => acc + p.price * p.stock, 0)
);
