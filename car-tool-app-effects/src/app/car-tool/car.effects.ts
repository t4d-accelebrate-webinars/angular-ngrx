import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import { CarsService } from './services/cars.service';
import {
  CarActionTypes,
  CarActionsUnion,
  RefreshCarsRequestAction,
  RefreshCarsDoneAction,
  AppendCarRequestAction,
  ReplaceCarRequestAction,
  DeleteCarRequestAction,
} from './car.actions';

@Injectable({
  providedIn: 'root',
})
export class CarEffects {

  constructor(
    private carsSvc: CarsService,
    private actions$: Actions<CarActionsUnion>,
  ) {}

  @Effect()
  refreshCars$: Observable<RefreshCarsDoneAction> = this.actions$.pipe(
    ofType(CarActionTypes.REFRESH_CARS_REQUEST),
    switchMap(() => {
      return this.carsSvc.all().pipe(
        map(cars => new RefreshCarsDoneAction({ cars })),
      );
    }),
  );

  @Effect()
  appendCar$: Observable<RefreshCarsRequestAction> = this.actions$.pipe(
    ofType(CarActionTypes.APPEND_CAR_REQUEST),
    switchMap((action: AppendCarRequestAction) => {
      return this.carsSvc.append(action.payload.car).pipe(
        map(() => new RefreshCarsRequestAction()),
      );
    }),
  );

  @Effect()
  replaceCar$: Observable<RefreshCarsRequestAction> = this.actions$.pipe(
    ofType(CarActionTypes.REPLACE_CAR_REQUEST),
    switchMap((action: ReplaceCarRequestAction) => {
      return this.carsSvc.replace(action.payload.car).pipe(
        map(() => new RefreshCarsRequestAction()),
      );
    }),
  );

  @Effect()
  deleteCar$: Observable<RefreshCarsRequestAction> = this.actions$.pipe(
    ofType(CarActionTypes.DELETE_CAR_REQUEST),
    switchMap((action: DeleteCarRequestAction) => {
      return this.carsSvc.delete(action.payload.carId).pipe(
        map(() => new RefreshCarsRequestAction()),
      );
    }),
  );
}