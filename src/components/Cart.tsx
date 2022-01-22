import ProductList from './ProductList';
import React, { useContext } from 'react';
import { GlobalStateContext } from '../App';


const Cart: React.FC = () => {
  const { state: { cart, products } } = useContext(GlobalStateContext);
  const cartIds = cart.map(({ productId }) => productId);
  const cartProducts = products.filter(p => cartIds.includes(p.id));
  return (
    <div className="Cart">
      <h2>Cart:</h2>
      <ProductList products={cartProducts} isCart />
    </div>
  );
};

export default Cart;
