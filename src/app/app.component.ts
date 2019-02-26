import { Component, OnInit } from '@angular/core';
import { LoadDataService } from './services/load-data.service';
import { StoreService } from './store/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private loadDataService: LoadDataService,
    private storeService: StoreService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadDataService.getData().subscribe((services) => {
      this.storeService.setServices(services);
    });
    this.router.navigate(['todos']);
  }
}
