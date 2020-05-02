import React from 'react';
import './landingPg.css';

export default function LandingPg() {
  return (
    <div>
      <div className='backgroundImg '>
        <div className='backgroundText container-fluid'>
          <div className='row innerText1'>
            <div className='col-md-4'></div>
            <h1 className='col-md-4 innerFont1'>
              Here at Inwood Media, we focus on{' '}
              <h1 className='youText'>YOU.</h1>
            </h1>
            <div className='col-md-4'></div>
          </div>
          {/* <div className='row innerText2'>
            <div className='col-md-4'></div>
            <h6 className='col-md-4 innerFont2'>
              A look into my digital life.
            </h6>
            <div className='col-md-4'></div>
          </div> */}

          <div className='row'>
            <div className='col-md-4'></div>
            <a className='col-md-4 btn btnContinue' href='#quote'>
              See How
            </a>
            <div className='col-md-4'></div>
          </div>
        </div>
      </div>
    </div>
  );
}
