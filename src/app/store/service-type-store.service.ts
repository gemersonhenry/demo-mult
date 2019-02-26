import { Injectable } from '@angular/core';
import { StoreService } from './store.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ServiceModel } from '../models/main';
import { EServiceType } from '../constants/main';

@Injectable({
  providedIn: 'root'
})
export class ServiceTypeStoreService {

  constructor(
    private store: StoreService
  ) { }

  public get $todosServices(): Observable<ServiceModel[]> {
    return this.store.$services;
  }

  public get $autosServices(): Observable<ServiceModel[]> {
    return this.store.$services
      .pipe(
        map((services) => {
          const { AUTOS } = EServiceType;
          return services.filter(serv => serv.serviceType === AUTOS);
        })
      );
  }

  public get $saludServices(): Observable<ServiceModel[]> {
    return this.store.$services
      .pipe(
        map((services) => {
          const { SALUD } = EServiceType;
          return services.filter(serv => serv.serviceType === SALUD);
        })
      );
  }

  public get $hogarServices(): Observable<ServiceModel[]> {
    return this.store.$services
      .pipe(
        map((services) => {
          const { HOGAR } = EServiceType;
          return services.filter(serv => serv.serviceType === HOGAR);
        })
      );
  }
}
