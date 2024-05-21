import { Component, Input } from '@angular/core';
import { Note } from '../shared/types';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input() notes!: Array<Note>;
}
