import React, { useContext } from 'react';
import CommentList from './CommentList';
import { ADD_COMMENT, ADD_TO_CART, GlobalStateContext } from '../App';
import { ProductType } from '../Types';

type Props = {
  product: ProductType;
};

const Product: React.FC<Props> = ({ product }) => {
  const { dispatch } = useContext(GlobalStateContext);

  const addToCart = () => {
    dispatch({ type: ADD_TO_CART, productId: product.id });
  };
  const addComment = () => {
    console.log('addComment clicked')
    dispatch({
      type: ADD_COMMENT,
      productId: product.id,
      comment: 'A new comment',
    });
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

export default Product;
