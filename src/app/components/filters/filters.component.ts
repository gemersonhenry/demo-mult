import { Component, OnInit } from '@angular/core';
import { FiltersStateService } from 'src/app/services/filters-state.service';
import { EServiceType } from 'src/app/constants/main';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  public serviceType: EServiceType;

  constructor(
    private fsService: FiltersStateService,
    private router: Router
  ) {
    this.fsService.setSelectedFilter('todos' as EServiceType);
  }

  ngOnInit() {
    this.fsService.$selectedFilter.subscribe((filter) => {
      this.serviceType = filter;
    })
  }

  public changeFilter(serviceType: EServiceType) {
    this.fsService.setSelectedFilter(serviceType);
    this.router.navigate([serviceType]);
  }

}
