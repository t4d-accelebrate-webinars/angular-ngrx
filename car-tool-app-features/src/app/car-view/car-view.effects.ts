import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import {switchMap, map, catchError} from 'rxjs/operators';

import {
  CarViewActionsUnion, RefreshCarDoneAction,
  RefreshCarRequestAction, CarViewActions
} from './car-view.actions';
import { Car } from '../car-core/models/car';

import { ErrorOccurredAction } from '../car-core/error.action';


@Injectable({
  providedIn: 'root',
})
export class CarViewEffects {

  constructor(
    private httpClient: HttpClient,
    private actions$: Actions<CarViewActionsUnion>,
  ) { }

  @Effect()
  refreshCars$: Observable<RefreshCarDoneAction | ErrorOccurredAction> = this.actions$.pipe(
    ofType(CarViewActions.RefreshCarRequest),
    switchMap((action: RefreshCarRequestAction) => {
      return this.httpClient
        .get<Car>('http://localhost:4250/cars/' + action.payload.carId)
        .pipe(
          map(car =>
            new RefreshCarDoneAction({ car })),
          catchError(err =>
            of(new ErrorOccurredAction({ errorMessage: err.message }))),
        );
    }),
  );

}
