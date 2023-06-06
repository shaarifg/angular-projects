import { Todo } from './../interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos:Todo[];
  completedTodos:Todo[];
  localTodos:string
  constructor(){

    this.localTodos = localStorage.getItem('todos')
    if(!this.localTodos){
      this.todos = []
    }else{
      this.todos = JSON.parse(this.localTodos);
      this.completedTodos = this.todos.filter((todo)=>todo.active==false)
    }

  }
  deleteTodo(todo:Todo){
    const index = this.todos.indexOf(todo);
    // console.log(index)
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }
  addTodos(todo:Todo){
    // const index = this.todos.indexOf(todo);
    // console.log(index)
    this.todos && this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }


  moveToCompleted(todo:Todo){
    this.completedTodos.push(todo)
    localStorage.setItem('completedtodos', JSON.stringify(this.todos))
    this.deleteTodo(todo);
  }

}
