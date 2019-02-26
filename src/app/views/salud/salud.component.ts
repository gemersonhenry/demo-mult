import { Component, OnInit } from '@angular/core';
import { ServiceTypeStoreService } from 'src/app/store/service-type-store.service';
import { ServiceModel } from 'src/app/models/main';

@Component({
  selector: 'app-salud',
  templateUrl: './salud.component.html',
  styleUrls: ['./salud.component.scss']
})
export class SaludComponent implements OnInit {

  public services: ServiceModel[];

  constructor(
    private stStore: ServiceTypeStoreService
  ) { }

  ngOnInit() {
    this.stStore.$saludServices.subscribe((services) => {
      this.services = services;
    });
  }

}
