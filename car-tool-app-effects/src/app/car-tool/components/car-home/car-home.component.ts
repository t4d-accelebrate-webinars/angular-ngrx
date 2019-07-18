import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { AppState } from '../../../app-state';
import { Car } from '../../models/car';
import {
  RefreshCarsRequestAction, AppendCarRequestAction,
  ReplaceCarRequestAction, DeleteCarRequestAction,
  EditCarAction, CancelCarAction } from '../../car.actions';

@Component({
  selector: 'car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {
  cars$ = this.store.pipe(select(state => state.cars));
  editCarId$ = this.store.pipe(select('editCarId'));
  
  constructor(
    private store: Store<AppState>,
  ) { }
  
  ngOnInit() {
    this.store.dispatch(new RefreshCarsRequestAction());
  }
  
  doAppendCar(car: Car) {
    this.store.dispatch(new AppendCarRequestAction({ car }));
  }
  
  doReplaceCar(car: Car) {
    this.store.dispatch(new ReplaceCarRequestAction({ car }));
  }
  
  doDeleteCar(carId: number) {
    this.store.dispatch(new DeleteCarRequestAction({ carId }));
  }
  
  doEditCar(carId: number) {
    this.store.dispatch(new EditCarAction({ carId }));
  }
  
  doCancelCar() {
    this.store.dispatch(new CancelCarAction());
  }
}
