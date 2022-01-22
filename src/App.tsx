import React, { createContext, useReducer } from 'react';
import './App.css';
import AllProducts from './components/AllProducts';
import Cart from './components/Cart';
import { Action, State } from './Types';

export const ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  ADD_COMMENT = 'ADD_COMMENT',
  DELETE_COMMENT = 'DELETE_COMMENT';

function withoutItemAtIndex<T>(array: T[], index: number): T[] {
  return [
    ...array.slice(0, index),
    ...array.slice(index + 1),
  ];
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ADD_TO_CART:
      if (
        state.cart.find(entry => entry.productId === action.productId)
      ) return { ...state };
      return {
        ...state,
        cart: [
          ...state.cart, {
            productId: action.productId,
          },
        ],
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart
          .filter((entry) => entry.productId !== action.productId),
      };

    case ADD_COMMENT:
      const commentId = state.commentIdCounter + 1;
      return {
        ...state,
        commentIdCounter: commentId,
        products: state.products.map(p => {
          if (p.id !== action.productId) return p;
          return {
            ...p,
            comments: [
              ...p.comments,
              {
                id: commentId,
                text: action.comment,
              },
            ],
          };
        }),
      };

    case DELETE_COMMENT:
      return {
        ...state,
        products: state.products.map(p => {
          const commentIndex = p.comments.findIndex(c => c.id === action.commentId);
          if (commentIndex < 0) return p;
          return { ...p, comments: withoutItemAtIndex(p.comments, commentIndex) };
        }),
      };

    default:
      return state;
  }
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

type GlobalStateAndDispatch = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

export const GlobalStateContext = createContext<GlobalStateAndDispatch>(
  undefined as unknown as GlobalStateAndDispatch,
);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <header className="App-header">
          <h1>Shop</h1>
        </header>
        <main className="Main">
          <AllProducts />
          <Cart />
        </main>
      </div>
    </GlobalStateContext.Provider>
  );
}

export default App;
