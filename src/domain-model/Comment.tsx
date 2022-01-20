export default class Comment {
  private _id: number;
  private _text: string;

  constructor(id: number, text: string) {
    this._id = id;
    this._text = text;
  }


  get text(): string {
    return this._text;
  }

  get id(): number {
    return this._id;
  }

  set text(value: string) {
    this._text = value;
  }
}
