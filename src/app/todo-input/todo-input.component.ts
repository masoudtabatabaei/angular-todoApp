import { Component , Input , OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
  @Input() childMessage = '';

  constructor(private state:StateService) { }

  ngOnInit(): void {

  }

  getInputValue(event:Event) {
    let inputValue = (<HTMLInputElement>event.target).value;
    this.state.todo.next(inputValue);
    if (inputValue.trim() !== '') {
      this.state.inputIsEmpty.next(false);
    } else {
      this.state.inputIsEmpty.next(true);
    }
  }
}
