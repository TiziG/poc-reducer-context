import Comment from './Comment';

export default class Product {
  private _id: number;
  private _name: string;
  private _price: number;
  private readonly _comments: Comment[];

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get price(): number {
    return this._price;
  }

  get comments(): Comment[] {
    return this._comments;
  }

  set name(value: string) {
    this._name = value;
  }

  set price(value: number) {
    this._price = value;
  }

  addComment(comment: Comment) {
    this._comments.push(comment);
  }

  removeComment(comment: Comment) {
    const index = this._comments.indexOf(comment);
    if (index > -1) {
      this._comments.splice(index, 1);
    }
  }

  constructor(id: number, name: string, price: number, comments: Comment[]) {
    this._id = id;
    this._name = name;
    this._price = price;
    this._comments = comments;
  }
}
