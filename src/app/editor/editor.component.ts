import { Component, Input } from '@angular/core';
import { Note } from '../shared/types';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css'
})
export class EditorComponent {
  @Input() note!: Note;
}
