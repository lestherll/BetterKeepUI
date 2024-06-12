import { NoteDTO } from '../../dto/NoteDTO';
import { CheckListItem } from './CheckListItem';
import { NoteState } from './NoteState';

export class Note {
  private _noteId: string;
  private _title: string;
  private _body: CheckListItem[];
  private _labels: string[];
  private _isPinnned: boolean;
  private _state: NoteState;

  private _originalData: Partial<NoteDTO> = {};

  constructor(options: NoteDTO) {
    this._noteId = options.noteId || '';
    this._title = options.title || '';
    this._body = options.body || [];
    this._labels = options.labels || [];
    this._isPinnned = options.isPinned ?? false;
    this._state = options.state || 'ACTIVE';

    // store the original data for patch
    this._originalData = { ...options };
  }

  // get the patch payload
  getPatchPayload(): Partial<NoteDTO> {
    const payload: Partial<NoteDTO> = {};
    if (this._noteId !== this._originalData.noteId) {
      payload.noteId = this._noteId;
    }
    if (this._title !== this._originalData.title) {
      payload.title = this._title;
    }
    if (this._body !== this._originalData.body) {
      payload.body = this._body;
    }
    if (this._labels !== this._originalData.labels) {
      payload.labels = this._labels;
    }
    if (this._isPinnned !== this._originalData.isPinned) {
      payload.isPinned = this._isPinnned;
    }
    if (this._state !== this._originalData.state) {
      payload.state = this._state;
    }
    return payload;
  }

  // recieve the response to update (able for both patch and put)
  updateOriginalData(newData: Partial<NoteDTO>): void {
    Object.assign(this._originalData, newData);
  }

  // getter and setter
  public get noteId(): string {
    return this._noteId;
  }

  public get title(): string {
    return this._title;
  }
  public set title(value: string) {
    this._title = value;
  }

  public get body(): CheckListItem[] {
    return this._body;
  }
  public set body(value: CheckListItem[]) {
    this._body = value;
  }

  public get labels(): string[] {
    return this._labels;
  }
  public set labels(value: string[]) {
    this._labels = value;
  }

  public get isPinnned(): boolean {
    return this._isPinnned;
  }
  public set isPinnned(value: boolean) {
    this._isPinnned = value;
  }

  public get state(): NoteState {
    return this._state;
  }
  public set state(value: NoteState) {
    this._state = value;
  }
}
