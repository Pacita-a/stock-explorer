import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/core/models/product/product.model';

export const fetchPending = createAction('[Product List] Fetch pending');

export const fetchFulfilledPending = createAction(
  '[Product List] Fetch fetch Fulfilled Pending',
  props<{ data: Product[] }>()
);

export const fetchError = createAction(
  '[Product List] Fetch Error',
  props<{ error: any }>()
);

export const clearState = createAction('[Product List] Clear State');
