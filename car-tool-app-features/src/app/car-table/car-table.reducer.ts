import { CarTableState} from './car-table.state';

import {CarTableActionsUnion, RefreshCarsDoneAction} from './car-table.actions';

export const carTableReducer = (state: CarTableState = { cars: [] }, action: CarTableActionsUnion) => {

  if (action instanceof RefreshCarsDoneAction) {
    return { cars: action.payload.cars };
  }

  return state;
};
