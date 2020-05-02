import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Portfolio from './components/PortfolioSection';
import LandingPG from './components/LandingPG';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';
import './components/QuoteSection/quote.css';
import './components/Home/home.css';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <LandingPG />
        <div id='quote'></div>
        <p class='expressionText'>
          Inwood Media is focused on achieving the ideas and imagination of all
          clients. We thrive on accomplishing an asorted list of goals. We can
          make your digital experience excellent.{' '}
          <a href='#portfolio' class='btn continueBTN'>
            {' '}
            Continue
          </a>{' '}
          to engage a project.
        </p>
        <div className='arrowDown'>
          <a href='#portfolio' className='downButton '>
            <i className='fas fa-sort-down'></i>
          </a>
        </div>
        <Portfolio />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
