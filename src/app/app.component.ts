import { Component, OnInit } from '@angular/core';
import { LoadDataService } from './services/load-data.service';
import { StoreService } from './store/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private loadDataService: LoadDataService,
    private storeService: StoreService,
  ) { }

  ngOnInit() {
    this.loadDataService.getData().subscribe((services) => {
      console.log('cargando toda la data: ', services);
      this.storeService.setServices(services);
    });
  }
}
