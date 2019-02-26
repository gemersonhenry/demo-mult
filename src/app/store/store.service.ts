import { Injectable } from '@angular/core';
import { ServiceModel } from '../models/main';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private _services: ServiceModel[];

  private _servicesSubject: BehaviorSubject<ServiceModel[]> = new BehaviorSubject([]);

  public get services(): ServiceModel[] {
    return this._services;
  }

  public get $services(): Observable<ServiceModel[]> {
    return this._servicesSubject.asObservable();
  }

  public setServices(services: ServiceModel[]) {
    return this._servicesSubject.next(services);
  }

  constructor() {
    this.$services.subscribe((services) => this._services = services);
  }
}
