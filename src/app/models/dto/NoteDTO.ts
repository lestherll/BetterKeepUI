import { NoteState } from '../entity/note/NoteState';

export interface NoteDTO {
  // uuid
  noteId: string;

  title: string;
  body: CheckListItemDTO[];

  // set of labels
  labels?: string[];

  isPinned?: boolean;
  state?: NoteState;
  audit: AuditDTO;
}

export interface CheckListItemDTO {
  isChecked: boolean;
  text: string;
}

export interface AuditDTO {
  versionId: number;

  // uuid
  createdBy: string;
  modifiedBy: string;

  // ISO date string
  createdAt: string;
  modifiedAt: string;
}
