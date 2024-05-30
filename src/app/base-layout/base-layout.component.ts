import { Component, Input } from '@angular/core';
import { TodoItem, Note } from '../shared/types';


@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrl: './base-layout.component.css'
})
export class BaseLayoutComponent {
  @Input() notes!: Array<Note>; 
  note!:Note;

  ngOnInit(): void{
    this.note=this.notes[0]
    console.log("base init done")
  }

  changeEditorNote(n: any): void{
    this.note=n
  }
}
