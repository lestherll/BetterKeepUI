export class CheckListItem {
  isChecked: boolean;
  text: string;

  constructor(isChecked: boolean, text: string) {
    this.isChecked = isChecked;
    this.text = text;
  }
}
