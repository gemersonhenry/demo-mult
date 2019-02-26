import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IServiceFrontend } from '../interfaces/main';
import { map } from 'rxjs/operators';
import { ServiceModel } from '../models/main';

export interface ServiceResponse {
  servicios: IServiceFrontend[];
}

@Injectable({
  providedIn: 'root'
})
export class LoadDataService {

  constructor(
    private http: HttpClient
  ) { }

  public getData(): Observable<ServiceModel[]> {
    return this.http.get('/assets/data.json')
      .pipe(
        map((services: ServiceResponse) => {
          const servicesData = services.servicios;
          return servicesData.map((service) => new ServiceModel(service));
        })
      );
  }
}
