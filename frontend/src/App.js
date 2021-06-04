import React, { useEffect, useState } from 'react';
import './App.css';
import ProductList from './components/Products';
import withListLoading from './components/ProductsLoading';

function App() {
  const ListLoading = withListLoading(ProductList);
  const [appState, setAppState] = useState({
    loading: false,
    products: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `http://0.0.0.0/api/products`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((products) => {
        setAppState({ loading: false, products: products });
      });
  }, [setAppState]);
  return (
    <div className='App'>
      <div className='product-container'>
        <ListLoading isLoading={appState.loading} products={appState.products} />
      </div>
    </div>
  );
}
export default App;