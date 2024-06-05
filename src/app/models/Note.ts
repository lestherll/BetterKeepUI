import { CheckListItem } from './CheckListItem';
import { NoteLabel } from './NoteLabel';

export class Note {
  uuid: string;
  title: string;
  body: CheckListItem[] = [];
  labels: NoteLabel[] = [];
  isPinnned: boolean = false;
  state: string;

  constructor(
    uuid: string,
    title: string,
    body: CheckListItem[],
    labels: NoteLabel[],
    isPinned: boolean,
    state: string
  ) {
    this.uuid = uuid;
    this.title = title;
    this.body = body;
    this.labels = labels;
    this.isPinnned = isPinned;
    this.state = state;
  }
}
