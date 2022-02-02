import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  title:string = '';
  constructor(private state:StateService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    let newTitle = this.state.todo.value;
    this.state.addTodos(newTitle);
  }
}
