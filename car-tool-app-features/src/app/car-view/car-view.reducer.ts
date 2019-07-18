import { CarViewState } from './car-view.state';

import {CarViewActionsUnion, RefreshCarDoneAction} from './car-view.actions';

export const carViewReducer = (
  state: CarViewState = { car: null },
  action: CarViewActionsUnion) => {

  if (action instanceof RefreshCarDoneAction) {
    return { car: action.payload.car };
  }

  return state;
};
