import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component } from '@angular/core';
import { Todo } from '../interface';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo:Todo
  @Input() completed:Todo
  @Output() todoDelete:EventEmitter<Todo> = new EventEmitter();
  @Output() completedTodo:EventEmitter<Todo> = new EventEmitter();

  constructor(){}
  
  deleteTodo(){
    this.todoDelete.emit(this.todo);
    //this triggred when delete Button is clicked--and emit an event to the parent
  }
  onCheckBoxClick(){
    this.completedTodo.emit(this.todo);
  }
}
