import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../shared/types';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() id = "";
  @Input() checked = false;
  @Input() content = "";
  @Output() done = new EventEmitter<TodoItem>();

  handleClick() {
    this.checked = !this.checked;
    console.log("checked");
    this.done.emit({id: this.id, checked: this.checked, content: this.content});
  }
}
