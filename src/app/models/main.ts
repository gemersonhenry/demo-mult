import { IServiceFrontend } from '../interfaces/main';
import { EServiceType } from '../constants/main';

export class ServiceModel {

  private _id: number;
  private _name: string;
  private _description: string;
  private _serviceType: EServiceType;

  public get id() {
    return this._id;
  }

  public get name() {
    return this._name;
  }

  public get description() {
    return this._description;
  }

  public get serviceType() {
    return this._serviceType;
  }

  constructor(service: IServiceFrontend) {
    this._id = service.id || -1;
    this._name = service.name || '';
    this._description = service.description || '';
    this._serviceType = service.serviceType || '' as EServiceType;
  }
}
