import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as ProductActions from './product.actions';
import { ProductApiService } from '../../services/product/product-api.service';

@Injectable()
export class ProductEffects {
  postProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.fetchPendingCreate),
      switchMap((payload) =>
        this.productApiService.postProduct(payload.product).pipe(
          map((data) => ProductActions.fetchFulfilledPendingCreate({ data })),
          catchError((error) => of(ProductActions.fetchErrorCreate({ error })))
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private productApiService: ProductApiService
  ) {}
}
