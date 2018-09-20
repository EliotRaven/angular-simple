import { Component, OnInit } from '@angular/core';
import {TodoService} from "../services/todo.service";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  constructor(private todoService: TodoService) {}

  ngOnInit() {
  }

  title:string = '';


  onSubmit(){
    this.todoService.create(this.title)
  }

}
