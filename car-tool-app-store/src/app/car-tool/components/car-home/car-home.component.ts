import { Component} from '@angular/core';
import { Store, select } from '@ngrx/store';

import { AppState } from '../../../app-state';
import { Car } from '../../models/car';
import {
  AppendCarAction,
  ReplaceCarAction, DeleteCarAction,
  EditCarAction, CancelCarAction } from '../../car.actions';

@Component({
  selector: 'car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent {
  cars$ = this.store.pipe(select(state => state.cars));
  editCarId$ = this.store.pipe(select('editCarId'));
  
  constructor(private store: Store<AppState>) { }
  
  doAddCar(car: Car) {
    this.store.dispatch(new AppendCarAction(car));
  }
  
  doReplaceCar(car: Car) {
    this.store.dispatch(new ReplaceCarAction(car));
  }
  
  doDeleteCar(carId: number) {
    this.store.dispatch(new DeleteCarAction(carId));
  }
  
  doEditCar(carId: number) {
    this.store.dispatch(new EditCarAction(carId));
  }
  
  doCancelCar() {
    this.store.dispatch(new CancelCarAction());
  }
}
