import { Component, Input, OnInit } from '@angular/core';
import { TodoItem } from '../shared/types';
import { ContenteditableModelDirective } from '../contenteditable-model.directive';


@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrl: './todo-container.component.css'
})
export class TodoContainerComponent implements OnInit {
  @Input() title = ""
  @Input() list: Array<TodoItem> = []

  // done: Array<TodoItem> = [];
  doneCount = 0;

  ngOnInit() {
    console.log("called todo init");
  }

  handleEvent(event: TodoItem) {

    console.log("in container, this is the event", event.content)
    // this.list = this.list.filter(todo => todo.id !== event.id)
    let todo = this.list.find(todo => todo.id === event.id);

    if (todo !== undefined) {
      console.log("in container, this is todo", todo.content)
      this.doneCount += event.checked === true ? 1 : -1;
      todo.checked = event.checked;
      todo.content = event.content;
      
    }
    console.log(this.doneCount);
  }
}
