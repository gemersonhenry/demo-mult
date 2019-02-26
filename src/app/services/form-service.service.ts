import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { IServiceFrontend } from '../interfaces/main';
import { EServiceType } from '../constants/main';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  public formSubject: Subject<IServiceFrontend> = new Subject();

  public get $form(): Observable<IServiceFrontend> {
    return this.formSubject.asObservable();
  }

  public setForm(service: IServiceFrontend) {
    this.formSubject.next(service);
  }

  constructor() { }

  public resetPersistanceForm() {
    this.setForm({
      id: -1,
      name: '',
      description: '',
      serviceType: '' as EServiceType,
    });
  }
}
