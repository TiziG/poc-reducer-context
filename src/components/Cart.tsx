import ProductList from './ProductList';
import React from 'react';
import { CartEntryType, ProductId, ProductType } from '../Types';

type Props = {
  products: ProductType[];
  cartEntries: CartEntryType[];
  onRemoveFromCart: (productId: ProductId) => void;
};


const Cart: React.FC<Props> = ({
  products,
  cartEntries,
  onRemoveFromCart,
}) => {
  const cartProductIds = cartEntries.map(entry => entry.productId);
  const cartProducts = products.filter(p => cartProductIds.includes(p.id));
  return (
    <div className="Cart">
      <h2>Cart:</h2>
      <ProductList
        products={cartProducts}
        isCart
        onRemoveFromCart={onRemoveFromCart} />
    </div>
  );
};

export default Cart;
