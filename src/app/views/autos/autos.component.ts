import { Component, OnInit } from '@angular/core';
import { ServiceTypeStoreService } from 'src/app/store/service-type-store.service';
import { ServiceModel } from 'src/app/models/main';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.scss']
})
export class AutosComponent implements OnInit {

  public services: ServiceModel[];

  constructor(
    private stStore: ServiceTypeStoreService
  ) { }

  ngOnInit() {
    this.stStore.$autosServices.subscribe((services) => {
      console.log('autos component', services);
      this.services = services;
    });
  }

}
