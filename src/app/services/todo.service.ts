import { Injectable } from '@angular/core';

import { todoList } from "./data";
import { Todo } from "./todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  todoList: Todo[] = todoList;

  get(): Todo[] {
    return this.todoList;
  }

  create(title: string){
    let todo = new Todo(title)
    this.todoList.push(todo)
  }

  delete(todo: Todo){
      let index = this.todoList.indexOf(todo)

      if(index > -1){
          this.todoList.splice(index, 1)
      }
  }

  toggle(todo: Todo){
    todo.completed = !todo.completed
  }
}