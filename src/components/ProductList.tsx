import Product from './Product';
import React from 'react';
import ProductInCart from './ProductInCart';
import { CommentId, ProductId, ProductType } from '../Types';


type Props = {
  products: ProductType[],
  isCart?: boolean,
  onAddComment?: (productId: ProductId, comment: string) => void;
  onAddToCart?: (productId: ProductId) => void;
  onRemoveFromCart?: (productId: ProductId) => void;
  onDeleteComment?: (commentId: CommentId) => void;
}

const productList: React.FC<Props> = ({
  products,
  isCart,
  onAddToCart = () => {},
  onAddComment = () => {},
  onRemoveFromCart = () => {},
  onDeleteComment = () => {},
}: Props) => (
  <div className="product-list">
    {products.map(product => (
      isCart
        ? <ProductInCart
          product={product}
          key={product.id}
          onRemoveFromCart={onRemoveFromCart}
        />
        : <Product
          product={product}
          key={product.id}
          onAddComment={onAddComment}
          onAddToCart={onAddToCart}
          onDeleteComment={onDeleteComment}
        />
    ))}
  </div>
);

export default productList;
