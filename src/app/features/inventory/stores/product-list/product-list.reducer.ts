import { createReducer, on } from '@ngrx/store';
import * as ProductListActions from './product-list.actions';
import { Product } from 'src/app/core/models/product/product.model';

export const productListFeatureKey = 'productLists';

export interface ProductListState {
  pending: boolean;
  productList: Product[];
  error: any;
}

export const initialState: ProductListState = {
  pending: false,
  productList: [],
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(ProductListActions.fetchPending, (state) => ({
    ...state,
    pending: true,
  })),
  on(ProductListActions.fetchFulfilledPending, (state, payload) => ({
    ...state,
    productList: payload.data,
  })),
  on(ProductListActions.fetchError, (state, payload) => ({
    ...state,
    error: payload.error,
  })),
  on(ProductListActions.clearState, () => initialState)
);
