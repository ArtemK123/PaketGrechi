import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import BackendCheck from './components/BackendCheck';
import ProductList from './components/ProductList';
import { FilterProvider } from './context/FilterContext';

import './App.css';

function App() {
  return (
    <FilterProvider>
      <Header />
      <main>
        <ProductList />
        <BackendCheck />
      </main>
      <Footer />
    </FilterProvider>
  );
}

export default App;
