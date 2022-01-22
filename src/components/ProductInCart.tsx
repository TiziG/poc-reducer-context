import React, { useContext } from 'react';
import { GlobalStateContext, REMOVE_FROM_CART } from '../App';
import { ProductType } from '../Types';

type Props = {
  product: ProductType;
};

const ProductInCart: React.FC<Props> = ({ product }) => {
  const { dispatch } = useContext(GlobalStateContext);

  const remove = () => {
    dispatch({ type: REMOVE_FROM_CART, productId: product.id });
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
