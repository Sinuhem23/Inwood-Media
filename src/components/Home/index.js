import React from 'react';
import Portfolio from '../PortfolioSection';
import LandingPG from '../LandingPG';
import Quote from '../QuoteSection';

export default function Home() {
  return (
    <div>
      <LandingPG />
      <Quote />
      <Portfolio />
    </div>
  );
}
