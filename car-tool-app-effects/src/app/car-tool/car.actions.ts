import { Action } from '@ngrx/store';

import { Car } from './models/car';

export enum CarActionTypes {
  REFRESH_CARS_REQUEST = '[Car] Refresh Cars Request',
  REFRESH_CARS_DONE = '[Car] Refresh Cars Done',
  APPEND_CAR_REQUEST = '[Car] Append Car Request',
  REPLACE_CAR_REQUEST = '[Car] Replace Car Request',
  DELETE_CAR_REQUEST = '[Car] Delete Car Request',
  EDIT_CAR = '[Car] Edit Car',
  CANCEL_CAR = '[Car] Cancel Car',
}

export class RefreshCarsRequestAction implements Action {
  type = CarActionTypes.REFRESH_CARS_REQUEST;
  constructor() { }
}

export class RefreshCarsDoneAction implements Action {
  type = CarActionTypes.REFRESH_CARS_DONE;
  constructor(public payload: { cars: Car[] }) { }
}

export class AppendCarRequestAction implements Action {
  type = CarActionTypes.APPEND_CAR_REQUEST;
  constructor(public payload: { car: Car }) { }
}

export class ReplaceCarRequestAction implements Action {
  type = CarActionTypes.REPLACE_CAR_REQUEST;
  constructor(public payload: { car: Car }) { }
}

export class DeleteCarRequestAction implements Action {
  type = CarActionTypes.DELETE_CAR_REQUEST;
  constructor(public payload: { carId: number }) { }
}

export class EditCarAction implements Action {
  type = CarActionTypes.EDIT_CAR;
  constructor(public payload: { carId: number }) { }
}

export class CancelCarAction implements Action {
  type = CarActionTypes.CANCEL_CAR;
  constructor() { }
}

export type CarActionsUnion = RefreshCarsRequestAction | RefreshCarsDoneAction |
  AppendCarRequestAction | ReplaceCarRequestAction | DeleteCarRequestAction |
  EditCarAction | CancelCarAction;