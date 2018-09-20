import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '../services/todo'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() todo: Todo
  @Output() delete = new EventEmitter()

  toggle(){
    this.todo.completed = !this.todo.completed
  }

  onDelete(){
    this.delete.emit(this.todo);
  }

}
