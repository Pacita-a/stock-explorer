import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/core/models/product/product.model';

export const fetchPendingCreate = createAction(
  '[Product] Fetch pending Create',
  props<{ product: Product }>()
);

export const fetchFulfilledPendingCreate = createAction(
  '[Product] Fetch fetch Fulfilled Pending Create',
  props<{ data: Product }>()
);

export const fetchErrorCreate = createAction(
  '[Product] Fetch Error Create',
  props<{ error: any }>()
);

export const clearState = createAction('[Product] Clear State');
