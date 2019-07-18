import { Action } from '@ngrx/store';

import { Car } from './models/car';

export enum CarActionTypes {
  APPEND_CAR = '[Car] Append Car',
  REPLACE_CAR = '[Car] Replace Car',
  DELETE_CAR = '[Car] Delete Car',
  EDIT_CAR = '[Car] Edit Car',
  CANCEL_CAR = '[Car] Cancel Car',
}

export class AppendCarAction implements Action {
  type = CarActionTypes.APPEND_CAR;
  constructor(public payload: Car) { }
}

export class ReplaceCarAction implements Action {
  type = CarActionTypes.REPLACE_CAR;
  constructor(public payload: Car) { }
}

export class DeleteCarAction implements Action {
  type = CarActionTypes.DELETE_CAR;
  constructor(public payload: number) { }
}

export class EditCarAction implements Action {
  type = CarActionTypes.EDIT_CAR;
  constructor(public payload: number) { }
}

export class CancelCarAction implements Action {
  type = CarActionTypes.CANCEL_CAR;
  constructor() { }
}

export type CarActionsUnion = AppendCarAction |
  ReplaceCarAction | DeleteCarAction |
  EditCarAction | CancelCarAction;