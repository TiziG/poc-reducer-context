import Product from '../domain-model/Product';
import ProductComponent from './Product';
import React from 'react';
import ProductInCart from './ProductInCart';


type Props = {
  products: Product[],
  isCart?: boolean,
}

const productList: React.FC<Props> = ({ products, isCart }: Props) => (
  <div className="product-list">
    {products.map(product => (
      isCart
        ? <ProductInCart product={product} key={product.id} />
        : <ProductComponent product={product} key={product.id} />
    ))}
  </div>
);

export default productList;
