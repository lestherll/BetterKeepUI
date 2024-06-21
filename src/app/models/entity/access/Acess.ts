import { AccessDTO } from '../../dto/AccessDTO';

export class Access {
  private _accessId: string;
  private _noteId: string;
  private _owner: string;
  private _permissions: Set<string>;

  private _previousState: Partial<AccessDTO> = {};

  constructor(dto: AccessDTO) {
    this._noteId = dto.noteId || '';
    this._accessId = dto.accessId || '';
    this._owner = dto.owner || '';
    this._permissions = new Set<string>(dto.permissions || []);

    // store the original data for patch
    this._previousState = { ...dto };
  }

  // get the patch payload
  getPatchPayload(): Partial<AccessDTO> {
    const payload: Partial<AccessDTO> = {};
    if (this._noteId !== this._previousState.noteId) {
      payload.noteId = this._noteId;
    }
    if (this._accessId !== this._previousState.accessId) {
      payload.accessId = this._accessId;
    }
    if (this._owner !== this._previousState.owner) {
      payload.owner = this._owner;
    }
    return payload;
  }

  // recieve the response to update (able for both patch and put)
  updateAccess(dto: Partial<AccessDTO>): void {
    Object.assign(this._previousState, dto);
    this._noteId = dto.noteId || '';
    this._accessId = dto.accessId || '';
    this._owner = dto.owner || '';
    this._permissions = new Set<string>(dto.permissions || []);
  }

  // getter and setter
  public get accessId(): string {
    return this._accessId;
  }

  public get noteId(): string {
    return this._noteId;
  }
  public set noteId(value: string) {
    this._noteId = value;
  }

  public get owner(): string {
    return this._owner;
  }
  public set owner(value: string) {
    this._owner = value;
  }

  public get permissions(): Set<string> {
    return this._permissions;
  }
  public set permissions(value: Set<string>) {
    this._permissions = value;
  }
}
