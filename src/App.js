import React from 'react';
import Home from './pages/Home';
import Category from './components/Category';
import Pages from './pages/Pages';
import { BrowserRouter } from 'react-router-dom';
import Search from './components/Search';
import './index.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Search />
        <Category />
        <Pages/>
      </BrowserRouter>
    </div>
  );
}

export default App;
