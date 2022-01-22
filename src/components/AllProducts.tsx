import ProductList from './ProductList';
import React, { useContext } from 'react';
import { GlobalStateContext } from '../App';

const AllProducts: React.FC = () => {
  const { state: { products } } = useContext(GlobalStateContext);
  return (
    <div className="All-Products">
      <h2>All Products:</h2>
      <ProductList products={products} />
    </div>
  );
};

export default AllProducts;
