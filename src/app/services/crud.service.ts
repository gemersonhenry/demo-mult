import { Injectable } from '@angular/core';
import { StoreService } from '../store/store.service';
import { IServiceFrontend } from '../interfaces/main';
import { ServiceModel } from '../models/main';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(
    private store: StoreService
  ) { }

  public createService(service: IServiceFrontend) {
    const serv = new ServiceModel(service);
    const { services } = this.store;
    const newServicesArr = [...services, serv];
    console.log('newServicesArr: ', newServicesArr);
    this.store.setServices(newServicesArr);
  }

  public readServices(id: number): ServiceModel {
    return this.store.services[id];
  }

  public updateService(id: number, service: IServiceFrontend) {
    const serv = new ServiceModel(service);
    const { services } = this.store;
    const newServicesArr = [...services];
    newServicesArr[id] = serv;
    console.log('newServicesArr: ', newServicesArr);
    this.store.setServices(newServicesArr);
  }

  public deleteService(id: number) {
    const { services } = this.store;
    const newServicesArr = [...services].filter((serv) => serv.id !== id);
    console.log('newServicesArr: ', newServicesArr);
    this.store.setServices(newServicesArr);
  }
}
