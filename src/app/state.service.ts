import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  todo:BehaviorSubject<string> = new BehaviorSubject<string>('');

  todosHistory:BehaviorSubject<string[]> = new BehaviorSubject<string[]>(['first']);

  inputIsEmpty:BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(true);

  constructor() {}

  addTodos(newTitle:string){
    this.todosHistory.getValue().push(newTitle);
  }

  showList(){
    return this.todosHistory.getValue();
  }
}