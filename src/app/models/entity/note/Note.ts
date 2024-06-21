import { NoteDTO } from '../../dto/NoteDTO';
import { Audit } from './Audit';
import { CheckListItem } from './CheckListItem';
import { NoteState } from './NoteState';

export class Note {
  private _noteId: string;
  private _title: string;
  private _body: CheckListItem[];
  private _labels: Set<string>;
  private _isPinnned: boolean;
  private _state: NoteState;
  private _audit: Audit | null = null;

  // store the previous state, sync with backend database
  private _previousState: Partial<NoteDTO> = {};

  // init from the frontend, title is compulsory for a new note
  constructor(
    title: string,
    noteId?: string,
    body?: CheckListItem[],
    labels?: Set<string>,
    isPinnned?: boolean,
    state?: NoteState,
    audit?: Audit
  ) {
    this._title = title;
    this._noteId = noteId || '';
    this._body = body || [];
    this._labels = labels || new Set<string>();
    this._isPinnned = isPinnned ?? false;
    this._state = state || 'ACTIVE';
    this._audit = audit || null;

    this._previousState = this.toPUTDTO();
  }

  // GET, init note from backend
  static fromDTO(dto: NoteDTO): Note {
    return new Note(
      dto.title,
      dto.noteId,
      dto.body.map((item) => CheckListItem.fromDTO(item)),
      new Set<string>(dto.labels),
      dto.isPinned,
      dto.state,
      new Audit(dto.audit)
    );
  }

  // PUT, convert to dto
  toPUTDTO(): Partial<NoteDTO> {
    return {
      noteId: this._noteId,
      title: this._title,
      body: this._body.map((item) => item.toDTO()),
      labels: Array.from(this._labels),
      isPinned: this._isPinnned,
      state: this._state,
    };
  }

  // POST
  toPOSTDTO(): Partial<NoteDTO> {
    return {
      title: this._title,
      body: this._body.map((item) => item.toDTO()),
      labels: Array.from(this._labels),
      isPinned: this._isPinnned,
      state: this._state,
    };
  }

  // PATCH, get the patch payload
  toPATCHDTO(): Partial<NoteDTO> {
    const payload: Partial<NoteDTO> = {};
    if (this._title !== this._previousState.title) {
      payload.title = this._title;
    }
    if (this._body.map((item) => item.toDTO()) !== this._previousState.body) {
      payload.body = this._body;
    }
    if (Array.from(this._labels) !== this._previousState.labels) {
      payload.labels = Array.from(this._labels);
    }
    if (this._isPinnned !== this._previousState.isPinned) {
      payload.isPinned = this._isPinnned;
    }
    if (this._state !== this._previousState.state) {
      payload.state = this._state;
    }
    return payload;
  }

  // recieve the response to update previous state and current audit (PATCH/PUT)
  updateNote(dto: NoteDTO): void {
    Object.assign(this._previousState, dto);
    this.rollback();
  }

  // load previous state
  rollback(): void {
    this._noteId = this._previousState.noteId || '';
    this._title = this._previousState.title || '';
    if (this._previousState.body) {
      this._body = this._previousState.body.map((item) =>
        CheckListItem.fromDTO(item)
      );
    } else {
      this._body = [];
    }
    this._labels = new Set<string>(this._previousState.labels || null);
    this._isPinnned = this._previousState.isPinned ?? false;
    this._state = this._previousState.state || 'ACTIVE';
    if (this._previousState.audit && this._audit) {
      this._audit.update(this._previousState.audit);
    } else if (this._previousState.audit) {
      this._audit = new Audit(this._previousState.audit);
    }
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

  public get labels(): Set<string> {
    return this._labels;
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

  public get audit(): Audit | null {
    return this._audit;
  }
}
