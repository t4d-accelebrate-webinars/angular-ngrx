import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import {switchMap, map, catchError} from 'rxjs/operators';

import { CarTableActionsUnion, RefreshCarsDoneAction, CarTableActions } from './car-table.actions';
import { Car } from '../car-core/models/car';

import { ErrorOccurredAction } from '../car-core/error.action';


@Injectable({
  providedIn: 'root',
})
export class CarTableEffects {

  constructor(
    private httpClient: HttpClient,
    private actions$: Actions<CarTableActionsUnion>,
  ) { }

  @Effect()
  refreshCars$: Observable<RefreshCarsDoneAction | ErrorOccurredAction> = this.actions$.pipe(
    ofType(CarTableActions.RefreshCarsRequest),
    switchMap(() => {
      return this.httpClient
        .get<Car[]>('http://localhost:4250/cars')
        .pipe(
          map(cars =>
            new RefreshCarsDoneAction({ cars })),
          catchError(err =>
              of(new ErrorOccurredAction({ errorMessage: err.message }))),
        );
    }),
  );

}
