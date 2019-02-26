import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-normal-button',
  templateUrl: './normal-button.component.html',
  styleUrls: ['./normal-button.component.scss']
})
export class NormalButtonComponent implements OnInit {

  @Input() buttonType = '';
  @Input() buttonText = '';
  @Output() clickEvent: EventEmitter<{}> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public get outlineButton() {
    return {
      'btn btn-outline-success': this.buttonType = 'success',
      'btn btn-outline-primary': this.buttonType = 'primary',
      'btn btn-outline-secondary': this.buttonType = 'secondary',
      'btn btn-outline-danger': this.buttonType = 'danger',
      'btn btn-outline-warning': this.buttonType = 'warning',
      'btn btn-outline-info': this.buttonType = 'info',
    };
  }

  public onClick(target: HTMLElement) {
    this.clickEvent.emit(target);
  }

}
