import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import BackendCheck from './components/BackendCheck';
import ProductList from './components/ProductList';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <ProductList />
        <BackendCheck />
      </main>
      <Footer />
    </>
  );
}

export default App;
