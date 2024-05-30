import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from '../shared/types';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input() notes!: Array<Note>;

  @Output() selectNewNote = new EventEmitter<Note>();

  changeNote(ev: MouseEvent): void {
    const clickedNoteId = parseInt((ev.currentTarget as Element).id);
    
    //find note by id
    let newNote: Note = this.notes.find( n => {return n.id===clickedNoteId} ) as Note;
    
    //console.log(typeof(newNote))

    //now return new note to baselayout
    this.selectNewNote.emit(newNote);

  }

}
