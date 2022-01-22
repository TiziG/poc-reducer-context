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
