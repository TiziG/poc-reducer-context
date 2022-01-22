import React, { useState } from 'react';
import './App.css';
import AllProducts from './components/AllProducts';
import Cart from './components/Cart';
import { CartEntryType, CommentId, ProductId, ProductType } from './Types';

export type State = {
  products: ProductType[];
  cart: CartEntryType[];
  commentIdCounter: number;
};

function withoutItemAtIndex<T>(array: T[], index: number): T[] {
  return [
    ...array.slice(0, index),
    ...array.slice(index + 1),
  ];
}

const initialState: State = {
  products: [
    { id: 1, name: 'Banana', price: 3, comments: [] },
    { id: 2, name: 'Peach', price: 2, comments: [] },
    {
      id: 3, name: 'The Godfather: The Coppola Restoration - BluRay Set', price: 75, comments: [
        { id: 1, text: 'sweeet' },
        { id: 2, text: 'niiiice!' },
      ],
    },
  ],
  cart: [],
  commentIdCounter: 0,
};

function App() {
  const [state, setState] = useState<State>(initialState);

  function handleAddToCart(productId: ProductId) {
    if (state.cart.find(entry => entry.productId === productId)) return;
    setState({
      ...state,
      cart: [
        ...state.cart,
        { productId: productId },
      ],
    });
  }

  function handleRemoveFromCart(productId: ProductId) {
    setState({
      ...state, cart: state.cart.filter(
        (entry) => entry.productId !== productId,
      ),
    });
  }

  function handleAddComment(productId: ProductId, comment: string) {
    const commentId = state.commentIdCounter + 1;
    setState({
      ...state,
      commentIdCounter: commentId,
      products: state.products.map(p => {
        if (p.id !== productId) return p;
        return {
          ...p,
          comments: [
            ...p.comments,
            {
              id: commentId,
              text: comment,
            },
          ],
        };
      }),
    });
  }

  function handleDeleteComment(commentId: CommentId) {
    setState({
      ...state, products: state.products.map(p => {
        const commentIndex = p.comments.findIndex(c => c.id === commentId);
        if (commentIndex >= 0) {
          return { ...p, comments: withoutItemAtIndex(p.comments, commentIndex) };
        }
        return p;
      }),
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Shop</h1>
      </header>
      <main className="Main">
        <AllProducts
          products={state.products}
          onAddComment={handleAddComment}
          onDeleteComment={handleDeleteComment}
          onAddToCart={handleAddToCart} />
        <Cart
          products={state.products}
          cartEntries={state.cart}
          onRemoveFromCart={handleRemoveFromCart} />
      </main>
    </div>
  );
}

export default App;
