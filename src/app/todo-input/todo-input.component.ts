import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
  @Input() childMessage = '';

  constructor() { }

  ngOnInit(): void {
  }

}
