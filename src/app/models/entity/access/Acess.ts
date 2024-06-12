import { AccessDTO } from '../../dto/AccessDTO';
import { Permission } from './Permission';

export class Access {
  private _accessId: string;
  private _noteId: string;
  private _owner: string;
  private _permissions: Permission[];

  private _originalData: Partial<AccessDTO> = {};

  constructor(options: AccessDTO) {
    this._noteId = options.noteId || '';
    this._accessId = options.accessId || '';
    this._owner = options.owner || '';
    this._permissions = options.permissions || [];

    // store the original data for patch
    this._originalData = { ...options };
  }

  // get the patch payload
  getPatchPayload(): Partial<AccessDTO> {
    const payload: Partial<AccessDTO> = {};
    if (this._noteId !== this._originalData.noteId) {
      payload.noteId = this._noteId;
    }
    if (this._accessId !== this._originalData.accessId) {
      payload.accessId = this._accessId;
    }
    if (this._owner !== this._originalData.owner) {
      payload.owner = this._owner;
    }
    if (this._permissions !== this._originalData.permissions) {
      payload.permissions = this._permissions;
    }
    return payload;
  }

  // recieve the response to update (able for both patch and put)
  updateOriginalData(newData: Partial<AccessDTO>): void {
    Object.assign(this._originalData, newData);
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

  public get permissions(): Permission[] {
    return this._permissions;
  }
  public set permissions(value: Permission[]) {
    this._permissions = value;
  }
}
