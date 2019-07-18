import { ErrorActions, ErrorActionsUnion } from '../car-core/error.action';

export const errorMessageReducer = (state = '', action: ErrorActionsUnion) => {

  if (action.type === ErrorActions.ErrorOccurred) {
    return action.payload.errorMessage;
  }

};
