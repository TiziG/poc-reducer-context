import React from 'react';
import { ProductId, ProductType } from '../Types';

type Props = {
  product: ProductType;
  onRemoveFromCart: (product: ProductId) => void;
};

const ProductInCart: React.FC<Props> = ({
  product,
  onRemoveFromCart,
}) => {
  const remove = () => {
    onRemoveFromCart(product.id);
  };

  return (
    <div className="Product-container">
      <div className="Product">
        <h3>{product.name}</h3>
        <p className="Price">CHF {product.price}</p>
        <button onClick={() => remove()}>Remove</button>
      </div>
    </div>
  );
};

export default ProductInCart;
