import { Action } from '@ngrx/store';

import { Car } from '../car-core/models/car';

export enum CarViewActions {
  RefreshCarRequest = '[CarView] Refresh Car Request',
  RefreshCarDone = '[CarView] Refresh Car Done',
}

export class RefreshCarRequestAction implements Action {
  type = CarViewActions.RefreshCarRequest;
  constructor(public payload: { carId: number}) { }
}

export class RefreshCarDoneAction implements Action {
  type = CarViewActions.RefreshCarDone;
  constructor(public payload: { car: Car }) { }
}

export type CarViewActionsUnion = RefreshCarRequestAction | RefreshCarDoneAction;
