import { Component, OnInit } from '@angular/core';
import { ServiceModel } from 'src/app/models/main';
import { ServiceTypeStoreService } from 'src/app/store/service-type-store.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  public services: ServiceModel[];

  constructor(
    private stStore: ServiceTypeStoreService
  ) { }

  ngOnInit() {
    this.stStore.$todosServices.subscribe((services) => {
      console.log('salud component', services);
      this.services = services;
    });
  }

}
