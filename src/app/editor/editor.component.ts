import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgModel} from '@angular/forms';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { ContenteditableModelDirective } from '../contenteditable-model.directive';
import { Note, TodoItem } from '../shared/types';
import { TodoContainerComponent } from '../todo-container/todo-container.component';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css',
})
export class EditorComponent {
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  editingLabels: boolean = false;
  @Input() note!: Note;

  toggleEditLabels() {
    this.editingLabels = !this.editingLabels;
  }

  addNewLabel(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.note.labels.push(value);
    } else {
      this.toggleEditLabels();
    }

    event.chipInput!.clear();
  }

  removeLabel(label: string): void {
    const index = this.note.labels.indexOf(label);

    if (index >= 0) {
      this.note.labels.splice(index, 1);
    }
  }

  editLabelText(label: string, event: MatChipEditedEvent) {
    const value = event.value.trim();

    if (!value) {
      this.removeLabel(label);
      return;
    }

    const index = this.note.labels.indexOf(label);
    if (index >= 0) {
      this.note.labels[index] = value;
    }
  }

}
