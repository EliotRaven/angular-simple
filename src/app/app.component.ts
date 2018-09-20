import { Component } from '@angular/core';
import uuidv4 from 'uuid/v4'

class Todo {
    id: number;
    title: string;
    completed: boolean;

    constructor(id:number, title: string, completed: boolean = false){
        this.title = title;
        this.completed = completed
        this.id = id
    }
}

const todoList: Todo[] = [
    {
        id: 1,
        title: 'learn React',
        completed: false
    },
    {
        id: 2,
        title: 'learn Angular',
        completed: true
    },
    {
        id: 3,
        title: 'learn Vue',
        completed: false
    }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-simple';
  todoList: Todo[] = todoList;

  createTodo(e: Event, title: string){
    e.preventDefault()
    let todo: Todo = new Todo(uuidv4(), title);
    this.todoList.push(todo)
  }

  toggle(todo: Todo){
      todo.completed = !todo.completed
  }

  delete(todo: Todo){
    let index = this.todoList.indexOf(todo)

    if(index > -1){
      this.todoList.splice(index, 1)
    }
  }
}
