import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';

import PricesPG from './Pages/Prices';

import {
  BrowserRouter as Router,
  Route
  // Switch,
  // Redirect
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    // <Router>
    <div className='App'>
      <Nav />
      <Route exact path='/' component={Home} />
      <Route exact path='/prices' component={PricesPG} />

      <Footer />
    </div>
    // </Router>
  );
}

export default App;
