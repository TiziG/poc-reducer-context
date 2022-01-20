import React from 'react';
import './App.css';
import AllProducts from './components/AllProducts';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Shop</h1>
      </header>
      <main className="Main">
        <AllProducts />
        <Cart />
      </main>
    </div>
  );
}

export default App;
