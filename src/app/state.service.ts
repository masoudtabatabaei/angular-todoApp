import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  todo:BehaviorSubject<string> = new BehaviorSubject<string>('');

  todosHistory:BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  constructor() {}

  addTodos(newTitle:string){
    this.todosHistory.getValue().push(newTitle);
  }

  showList(){
    return this.todosHistory.getValue();
  }
}