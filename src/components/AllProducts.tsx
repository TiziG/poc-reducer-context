import ProductList from './ProductList';
import React from 'react';
import { CommentId, ProductId, ProductType } from '../Types';

type Props = {
  products: ProductType[];
  onAddComment: (productId: ProductId, comment: string) => void;
  onAddToCart: (productId: ProductId) => void;
  onDeleteComment: (commentId: CommentId) => void;
};

const AllProducts: React.FC<Props> = ({
  products,
  onAddComment,
  onAddToCart,
  onDeleteComment,
}) => {
  return (
    <div className="All-Products">
      <h2>All Products:</h2>
      <ProductList products={products}
                   onAddComment={onAddComment}
                   onDeleteComment={onDeleteComment}
                   onAddToCart={onAddToCart} />
    </div>
  );
};

export default AllProducts;
