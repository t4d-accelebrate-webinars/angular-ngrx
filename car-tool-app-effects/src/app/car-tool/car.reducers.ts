import { CarActionTypes, CarActionsUnion, EditCarAction, RefreshCarsDoneAction  } from './car.actions';

import { Car } from './models/car';

export const carsReducer = (state: Car[] = [], action: CarActionsUnion) => {

  switch (action.type) {
    case CarActionTypes.REFRESH_CARS_DONE:
      return (action as RefreshCarsDoneAction).payload.cars;
    default:
      return state;
  }

};

export const editCarIdReducer = (state = -1, action: CarActionsUnion) => {

  switch (action.type) {
    case CarActionTypes.EDIT_CAR:
      return (action as EditCarAction).payload.carId;
    case CarActionTypes.REFRESH_CARS_DONE:
    case CarActionTypes.CANCEL_CAR:
      return -1;
    default:
      return state;
  }

};
