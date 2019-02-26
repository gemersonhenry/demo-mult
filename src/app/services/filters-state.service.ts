import { Injectable } from '@angular/core';
import { EServiceType } from '../constants/main';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiltersStateService {

  private _selectedFilter: EServiceType = '' as EServiceType;

  private _selectedFilterSubject: BehaviorSubject<EServiceType> = new BehaviorSubject('' as EServiceType);

  public get $selectedFilter(): Observable<EServiceType> {
    return this._selectedFilterSubject.asObservable();
  }

  public get selectedFilter(): EServiceType {
    return this._selectedFilter;
  }

  constructor() {
    this.$selectedFilter.subscribe((filter) => this._selectedFilter = filter);
  }

  public setSelectedFilter(filter: EServiceType) {
    this._selectedFilterSubject.next(filter);
  }
}
