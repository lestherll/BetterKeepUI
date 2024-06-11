export class CheckListItem {
  private _isChecked: boolean;
  private _text: string;

  constructor(isChecked: boolean, text: string) {
    this._isChecked = isChecked;
    this._text = text;
  }

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
