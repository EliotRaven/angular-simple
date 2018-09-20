import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title:string = '';
  @Output() add = new EventEmitter();

  onSubmit(){
    this.add.emit(this.title)
  }

}
