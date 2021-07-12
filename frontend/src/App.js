import React, { useEffect, useState } from 'react';
import './App.css';
import ProductList from './components/Products';
import withListLoading from './components/ProductsLoading';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Products</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  const ListLoading = withListLoading(ProductList);
  const [appState, setAppState] = useState({
    loading: false,
    products: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `http://127.0.0.1/api/products`;
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

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
