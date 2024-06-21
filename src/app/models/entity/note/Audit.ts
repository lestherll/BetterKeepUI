import { AuditDTO } from '../../dto/NoteDTO';

// audit in frontend is read-only, so only init and update
export class Audit {
  private _versionId: number;
  private _createdBy: string;
  private _modifiedBy: string;
  private _createdAt: Date;
  private _modifiedAt: Date;

  // init
  constructor(dto: AuditDTO) {
    this._versionId = dto.versionId;
    this._createdBy = dto.createdBy;
    this._modifiedBy = dto.modifiedBy;
    this._createdAt = new Date(dto.createdAt);
    this._modifiedAt = new Date(dto.modifiedAt);
  }

  // update the audit info from the backend resoponse
  update(newData: Partial<AuditDTO>): void {
    this._versionId = newData.versionId || this._versionId;
    this._createdBy = newData.createdBy || this._createdBy;
    this._modifiedBy = newData.modifiedBy || this._modifiedBy;
    this._createdAt = new Date(newData.createdAt || this._createdAt);
    this._modifiedAt = new Date(newData.modifiedAt || this._modifiedAt);
  }

  // getter
  public get versionId(): number {
    return this._versionId;
  }
  public get createdBy(): string {
    return this._createdBy;
  }
  public get modifiedBy(): string {
    return this._modifiedBy;
  }
  public get createdAt(): Date {
    return this._createdAt;
  }
  public get modifiedAt(): Date {
    return this._modifiedAt;
  }
}
