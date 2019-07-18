import { CarActionTypes, CarActionsUnion, AppendCarAction, ReplaceCarAction, DeleteCarAction, EditCarAction } from './car.actions';

import { Car } from './models/car';

const initialCars: Car[] = [
  { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2018, color: 'black', price: 25000 },
  { id: 2, make: 'Tesla', model: 'S', year: 2018, color: 'red', price: 125000 },
];

export const carsReducer = (state: Car[] = initialCars, action: CarActionsUnion) => {

  switch (action.type) {
    case CarActionTypes.APPEND_CAR:
      return state.concat({
        ...(action as AppendCarAction).payload,
        id: Math.max(...state.map(c => c.id), 0) + 1,
      });
    case CarActionTypes.REPLACE_CAR:
      const carToReplace = (action as ReplaceCarAction).payload as Car;
      const newCars = state.concat();
      newCars[newCars.findIndex(c => c.id === carToReplace.id)] = carToReplace;
      return newCars;
    case CarActionTypes.DELETE_CAR:
      return state.filter(c => c.id !== (action as DeleteCarAction).payload);
    default:
      return state;
  }

};

export const editCarIdReducer = (state = -1, action: CarActionsUnion) => {

  switch (action.type) {
    case CarActionTypes.EDIT_CAR:
      return (action as EditCarAction).payload;
    case CarActionTypes.REPLACE_CAR:
    case CarActionTypes.DELETE_CAR:
    case CarActionTypes.CANCEL_CAR:
      return -1;
    default:
      return state;
  }

};