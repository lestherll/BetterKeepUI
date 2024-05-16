import { Component, Input } from '@angular/core';
import { TodoItem } from '../shared/types';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrl: './todo-container.component.css'
})
export class TodoContainerComponent {
  @Input() title = ""
  @Input() list: Array<TodoItem> = []

  // done: Array<TodoItem> = [];
  doneCount = 0;

  handleEvent(event: TodoItem) {
    // this.list = this.list.filter(todo => todo.id !== event.id)
    let todo = this.list.find(todo => todo.id === event.id);
    if (todo !== undefined) {
      this.doneCount += event.checked === true ? 1 : -1;
      todo.checked = event.checked;
    }
    console.log(this.doneCount);
    // this.done.push(event);
    // console.log(this.done);
  }
}
