import { createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/core/models/product/product.model';
import * as ProductActions from './product.actions';

export const productFeatureKey = 'product';

export interface ProductState {
  pendingCreate: boolean;
  productCreated?: Product;
  errorCreate: any;
}

export const initialState: ProductState = {
  pendingCreate: false,
  productCreated: undefined,
  errorCreate: null,
};

export const reducer = createReducer(
  initialState,
  on(ProductActions.fetchPendingCreate, (state) => ({
    ...state,
    pendingCreate: true,
  })),
  on(ProductActions.fetchFulfilledPendingCreate, (state, payload) => ({
    ...state,
    productCreated: payload.data,
  })),
  on(ProductActions.fetchErrorCreate, (state, payload) => ({
    ...state,
    errorCreate: payload.error,
  })),
  on(ProductActions.clearState, () => initialState)
);
