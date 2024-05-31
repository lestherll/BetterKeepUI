// import { UUID } from 'crypto';

export interface TodoItem {
  id: string;
  checked: boolean;
  content: string;
}

export interface Note {
  id: string;
  title: string;
  plaintext: string;
  checklist: Array<TodoItem>;
  labels: Array<string>;
}
