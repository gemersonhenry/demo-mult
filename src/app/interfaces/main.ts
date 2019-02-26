import { EServiceType } from '../constants/main';

export interface IServiceFrontend {
  id: number;
  name: string;
  description: string;
  serviceType: EServiceType;
}
