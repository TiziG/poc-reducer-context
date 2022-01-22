import React from 'react';
import CommentList from './CommentList';
import { CommentId, ProductId, ProductType } from '../Types';

type Props = {
  product: ProductType;
  onAddComment: (productId: ProductId, comment: string) => void;
  onDeleteComment: (commentId: CommentId) => void;
  onAddToCart: (productId: ProductId) => void;
};

const Product: React.FC<Props> = ({
  product,
  onAddComment,
  onAddToCart,
  onDeleteComment,
}) => {

  const addToCart = () => {
    onAddToCart(product.id);
  };
  const addComment = () => {
    onAddComment(product.id, 'A new comment');
  };

  return (
    <div className="Product-container">
      <div className="Product">
        <h3>{product.name}</h3>
        <p className="Price">CHF {product.price}</p>
        <button onClick={() => addToCart()}>Add to Cart</button>
      </div>
      <button onClick={() => addComment()}>Add Comment</button>
      <CommentList
        comments={product.comments}
        onDeleteComment={onDeleteComment} />
    </div>
  );
};

export default Product;
