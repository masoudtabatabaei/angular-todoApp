import { Component, OnInit } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: string[] = [];
  constructor(private state:StateService) { }

  ngOnInit(): void {
  }

  showTodosList(){
    return this.state.showList();
  }
}
