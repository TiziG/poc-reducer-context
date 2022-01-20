import Product from '../domain-model/Product';
import ProductList from './ProductList';
import React from 'react';
import Comment from '../domain-model/Comment';

//Todo get all Products
const products: Product[] = [
  new Product(1, 'Banana', 3, []),
  new Product(2, 'Peach', 2, []),
  new Product(3, 'The Godfather: The Coppola Restoration - BluRay Set', 75, [
    new Comment(1, 'Sweeet'),
    new Comment(1, 'Niiiice'),
  ]),
];

const allProducts: React.FC = () => (
  <div className="All-Products">
    <h2>All Products:</h2>
    <ProductList products={products} />
  </div>
);

export default allProducts;
