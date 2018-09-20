import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '../services/todo'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  ngOnInit(){}

  @Input() todo: Todo
  @Output() delete = new EventEmitter()
  @Output() toggle = new EventEmitter()

  onToggle(){
    this.toggle.emit(this.todo)
  }

  onDelete(){
    this.delete.emit(this.todo);
  }

}
