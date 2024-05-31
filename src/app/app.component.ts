import { Component } from '@angular/core';
import { randomUUID } from 'crypto';
import { Note, TodoItem } from './shared/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'betterkeepui';

  list: Array<TodoItem> = [
    { id: '1', checked: false, content: 'first todo' },
    { id: '2', checked: false, content: 'second todo' },
    { id: '3', checked: false, content: 'third todo' },
    { id: '4', checked: false, content: 'fourth todo' },
    { id: '5', checked: false, content: 'fifth todo' },
    { id: '6', checked: false, content: 'sixth todo' },
    { id: '7', checked: false, content: 'seventh todo' },
  ];

  list2: Array<TodoItem> = [
    { id: '1', checked: false, content: 'asdasd' },
    { id: '2', checked: false, content: 'asdasddzxczx' },
    { id: '3', checked: false, content: 'klasdjlas' },
    { id: '4', checked: false, content: 'askdhwqaa' },
  ];

  n1: Note = {
    id: 'abcde',
    title: 'Hello World',
    plaintext: 'World in plaintext',
    checklist: this.list2,
    labels: ['label1', 'label2', 'label3'],
  };

  n2: Note = {
    id: '12345',
    title: 'Groceries',
    plaintext: 'This week I got to Tesco',
    checklist: this.list,
    labels: ['shopping', 'weekly'],
  };

  notes: Array<Note> = [this.n1, this.n2];
}
