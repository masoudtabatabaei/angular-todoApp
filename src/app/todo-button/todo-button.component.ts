import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-todo-button',
  templateUrl: './todo-button.component.html',
  styleUrls: ['./todo-button.component.css']
})
export class TodoButtonComponent implements OnInit {
  // isDisableButton:Boolean = true;
  constructor(private state:StateService) { }

  ngOnInit(): void {

  }

  isDisableButton():Boolean {
    return this.state.inputIsEmpty.getValue();
  }
}
