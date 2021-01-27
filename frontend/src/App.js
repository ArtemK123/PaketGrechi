import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Search from './components/Search';
import ProductList from './components/ProductList';
import { FilterProvider } from './context/FilterContext';
import BackendCheck from './components/BackendCheck';

import './App.css';

function App() {
  return (
    <FilterProvider>
      <Header />
      <main>
        <Search />
        <ProductList />
      </main>
      <Footer />
    </FilterProvider>
  );
}

export default App;
