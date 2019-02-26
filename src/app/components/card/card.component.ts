import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ServiceModel } from 'src/app/models/main';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() cardTitle: string;
  @Input() cardText: string;
  @Output() deleteServiceEvent: EventEmitter<ServiceModel> = new EventEmitter();
  @Output() editServiceEvent: EventEmitter<ServiceModel> = new EventEmitter();

  @Input() cardData: ServiceModel;

  constructor() { }

  ngOnInit() {
  }

  public deleteService() {
    this.deleteServiceEvent.emit(this.cardData);
  }

  public editService() {
    this.editServiceEvent.emit(this.cardData);
  }

}
