export interface TodoItem {
  id: string;
  checked: boolean;
  content: string;
}

export interface Note {
  id: number;
  title: string;
  plaintext: string;
  checklist: Array<TodoItem>;
  labels: Array<string>;
}
