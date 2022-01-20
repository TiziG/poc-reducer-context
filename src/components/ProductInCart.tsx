import Product from '../domain-model/Product';
import React from 'react';

type Props = {
  product: Product;
};

const productInCart: React.FC<Props> = ({ product }) => {
  const remove = () => {
    //todo remove product from cart
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

export default productInCart;
