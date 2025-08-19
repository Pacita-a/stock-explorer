import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as ProductListActions from './product-list.actions';
import { ProductListApiService } from '../../services/product-list-api.service';

@Injectable()
export class ProductListEffects {
  ProductList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductListActions.fetchPending),
      switchMap(() =>
        this.productListApiService.getProductList().pipe(
          map((data) => ProductListActions.fetchFulfilledPending({ data })),
          catchError((error) => of(ProductListActions.fetchError({ error })))
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private productListApiService: ProductListApiService
  ) {}
}
