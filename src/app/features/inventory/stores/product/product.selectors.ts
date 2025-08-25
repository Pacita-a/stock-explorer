import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromProduct from './product.reducer';

export const selectProductListState =
  createFeatureSelector<fromProduct.ProductState>(
    fromProduct.productFeatureKey
  );

export const getProductState = createSelector(
  selectProductListState,
  (state: fromProduct.ProductState) => state
);
