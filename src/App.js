import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import { FilterProvider } from './context/FilterContext';

import './App.css';

function App() {
  return (
    <FilterProvider>
      <Header />
      <main>
        <ProductList />
      </main>
      <Footer />
    </FilterProvider>
  );
}

export default App;
