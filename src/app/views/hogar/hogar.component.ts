import { Component, OnInit } from '@angular/core';
import { ServiceTypeStoreService } from 'src/app/store/service-type-store.service';
import { ServiceModel } from 'src/app/models/main';

@Component({
  selector: 'app-hogar',
  templateUrl: './hogar.component.html',
  styleUrls: ['./hogar.component.scss']
})
export class HogarComponent implements OnInit {

  public services: ServiceModel[];

  constructor(
    private stStore: ServiceTypeStoreService
  ) { }

  ngOnInit() {
    this.stStore.$hogarServices.subscribe((services) => {
      console.log('hogar component', services);
      this.services = services;
    });
  }

}
