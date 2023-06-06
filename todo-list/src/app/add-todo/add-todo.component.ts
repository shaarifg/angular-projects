import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from '../interface';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  title:string;
  desc:string;
  @Output() addTodo:EventEmitter<Todo> = new EventEmitter();

  onSubmit(){
    const todo={
      id:8,
      title:this.title,
      desc:this.desc,
      active:true
    }
    this.addTodo.emit(todo)
  }
}
