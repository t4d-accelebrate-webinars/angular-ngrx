import { Action } from '@ngrx/store';

import { Car } from '../car-core/models/car';

export enum CarTableActions {
  RefreshCarsRequest = '[CarTable] Refresh Cars Request',
  RefreshCarsDone = '[CarTable] Refresh Cars Done',
}

export class RefreshCarsRequestAction implements Action {
  type = CarTableActions.RefreshCarsRequest;
}

export class RefreshCarsDoneAction implements Action {
  type = CarTableActions.RefreshCarsDone;
  constructor(public payload: { cars: Car[] }) { }
}

export type CarTableActionsUnion = RefreshCarsRequestAction | RefreshCarsDoneAction;
