import { CheckListItem } from '../entity/note/CheckListItem';
import { NoteState } from '../entity/note/NoteState';

export interface NoteDTO {
  // uuid
  noteId?: string;

  title?: string;
  body?: CheckListItem[];
  labels?: string[];
  isPinned?: boolean;
  state?: NoteState;
}
