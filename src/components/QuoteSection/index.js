import React from 'react';
import '../QuoteSection/quote.css';

export default function Quote() {
  return (
    <div>
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
    </div>
  );
}
