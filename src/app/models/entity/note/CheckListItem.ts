import { CheckListItemDTO } from '../../dto/NoteDTO';

export class CheckListItem {
  private _isChecked: boolean;
  private _text: string;

  // init in frontend, default value: false and empty
  constructor(isChecked: boolean = false, text: string = '') {
    this._isChecked = isChecked;
    this._text = text;
  }

  // convert into DTO
  toDTO(): CheckListItemDTO {
    return {
      isChecked: this._isChecked,
      text: this._text,
    };
  }

  // create checklist item from DTO (backend response)
  static fromDTO(dto: CheckListItemDTO): CheckListItem {
    return new CheckListItem(dto.isChecked, dto.text);
  }

  // getter and setter
  public get isChecked(): boolean {
    return this._isChecked;
  }
  public set isChecked(value: boolean) {
    this._isChecked = value;
  }

  public get text(): string {
    return this._text;
  }
  public set text(value: string) {
    this._text = value;
  }
}
