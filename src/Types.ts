import { ADD_COMMENT, ADD_TO_CART, DELETE_COMMENT, REMOVE_FROM_CART } from './App';

export type ProductId = number;
export type CommentId = number;
export type Price = number;
export type ProductName = string;
export type CommentText = string;

export type ProductType = {
  id: ProductId;
  name: ProductName;
  price: Price;
  comments: CommentType[];
};

export type CommentType = {
  id: CommentId;
  text: CommentText;
};

export type CartEntryType = {
  productId: ProductId;
};

export type Action = {
  type: typeof ADD_TO_CART,
  productId: ProductId
} | {
  type: typeof REMOVE_FROM_CART,
  productId: ProductId,
} | {
  type: typeof ADD_COMMENT,
  productId: ProductId,
  comment: string,
} | {
  type: typeof DELETE_COMMENT,
  commentId: CommentId,
};

export type State = {
  products: ProductType[];
  cart: CartEntryType[];
  commentIdCounter: number;
};
