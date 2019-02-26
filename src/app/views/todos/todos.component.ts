import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public grabarEvent(target) {
    console.log('target: ', target);
  }

  public cancelarEvent(target) {
    console.log('target: ', target);
  }

}
