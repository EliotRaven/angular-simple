import { Component, OnInit } from '@angular/core';

import { Todo } from '../services/todo'
import { TodoService } from "../services/todo.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList: Todo[];

  constructor(private todoService: TodoService) {
    this.todoList = [];
  }

  ngOnInit() {
      this.todoList = this.todoService.get()
  }

  delete(todo: Todo){
    let index = this.todoList.indexOf(todo)

    if(index > -1){
      this.todoList.splice(index, 1)
    }
  }

}
