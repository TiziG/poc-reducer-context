import Product from './Product';
import React from 'react';
import ProductInCart from './ProductInCart';
import { ProductType } from '../Types';


type Props = {
  products: ProductType[],
  isCart?: boolean,
}

const productList: React.FC<Props> = ({ products, isCart }: Props) => (
  <div className="product-list">
    {products.map(product => (
      isCart
        ? <ProductInCart product={product} key={product.id} />
        : <Product product={product} key={product.id} />
    ))}
  </div>
);

export default productList;
