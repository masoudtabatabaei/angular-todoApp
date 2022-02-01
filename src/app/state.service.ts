import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  titleSource = new BehaviorSubject<string>('');
  todosList = new BehaviorSubject<string[]>([]);

  constructor() {}

  setNewTitle(newTitle: string):void {
    this.titleSource.next(newTitle);
  }

  getTitle() {
    return this.titleSource.getValue();
  }

  addToList(newTitle:string){
    let items = this.todosList.getValue();
    items.push(newTitle);
    this.todosList.next(items);
  }
}
