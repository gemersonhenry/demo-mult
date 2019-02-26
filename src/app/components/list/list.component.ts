import { Component, Input } from '@angular/core';
import { ServiceTypeStoreService } from 'src/app/store/service-type-store.service';
import { ServiceModel } from 'src/app/models/main';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input() services: ServiceModel[];

  constructor() { }

}
