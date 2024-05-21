import { Component, Input, Output } from '@angular/core';
import { Note, TodoItem } from '../shared/types';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoContainerComponent } from '../todo-container/todo-container.component';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css'
})
export class EditorComponent {
  @Input() note!: Note;
}
