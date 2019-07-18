import { Action } from '@ngrx/store';

export enum ErrorActions {
  ErrorOccurred = '[Error] Error Occurred',
}

export class ErrorOccurredAction implements Action {
  type = ErrorActions.ErrorOccurred;
  constructor(public payload: { errorMessage: string }) { }
}

export type ErrorActionsUnion = ErrorOccurredAction;
