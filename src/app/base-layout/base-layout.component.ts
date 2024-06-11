import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from '../services/note.service';
import { Note, TodoItem } from '../shared/types';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrl: './base-layout.component.css',
})

export class BaseLayoutComponent implements OnInit {
  @Input() notes!: Array<Note>;
  note!: Note;

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.note = this.notes[0];
    console.log('base init done');

    this.noteService.getAllNotes().subscribe((data) => {
      console.log(JSON.stringify(data));
    });

    console.log('=======================================');
    const noteId: string = '59d17002-cf9a-44cb-a5d1-0e582b04038e';
    this.noteService.getNoteByID(noteId).subscribe((data) => {
      console.log(JSON.stringify(data));
    });
  }

  changeEditorNote(n: any): void {
    this.note = n;

  }
}
