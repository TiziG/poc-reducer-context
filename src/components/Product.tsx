import Product from '../domain-model/Product';
import React from 'react';
import CommentList from './CommentList';

type Props = {
  product: Product;
};

const product: React.FC<Props> = ({ product }) => {
  const addToCart = () => {
    //todo add product to cart
  };
  const addComment = () => {
    //todo add comment to product
  };

  return (
    <div className="Product-container">
      <div className="Product">
        <h3>{product.name}</h3>
        <p className="Price">CHF {product.price}</p>
        <button onClick={() => addToCart()}>Add to Cart</button>
      </div>
      <button onClick={() => addComment()}>Add Comment</button>
      <CommentList comments={product.comments} />
    </div>
  );
};

export default product;
