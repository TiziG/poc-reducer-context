import Product from '../domain-model/Product';
import ProductList from './ProductList';
import React from 'react';
import Comment from '../domain-model/Comment';

//Todo get products in cart
const products: Product[] = [
  new Product(2, 'Peach', 2, []),
  new Product(3, 'The Godfather: The Coppola Restoration - BluRay Set', 75, [
    new Comment(1, 'Niiiice'),
  ]),
];


const cart: React.FC = () => (
  <div className="Cart">
    <h2>Cart:</h2>
    <ProductList products={products} isCart />
  </div>
);

export default cart;
