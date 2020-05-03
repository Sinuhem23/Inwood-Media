import React from 'react';
import './portfolio.css';

export default function PortfolioSec() {
  return (
    <div>
      <div id='portfolio'></div>
      <div className='row secondCol'>
        {/* First Col */}

        <div className='col-lg-4 text-center'>
          <div className='portfolioSection '>
            <h2 className='col1Text'>Select A Project</h2>
            <p className='col1secondText'>Feel free to look around</p>
            <div className='row'>
              <a target='_blank' href='/' className=' btn btnToView'>
                Start A New Project
              </a>
            </div>
            <div className='row'>
              <a target='_blank' href='/' className=' btn btnToView'>
                Category Info
              </a>
            </div>
            <div className='row '>
              <a href='#footer' className=' footerArrow'>
                <i className='fas fa-sort-down'></i>
              </a>
            </div>
          </div>
        </div>

        {/* Second Col */}
        <div className='col-lg-8 '>
          {/* Row 1 */}
          <div className='row firstTextRow'>
            <div className='col-md-4 btn'>
              <a target='_blank' href='/'>
                <div
                  className='card-img-top completeWebsite'
                  alt='complete-Website'
                ></div>
              </a>
              <div className='card-body'>
                <a target='_blank' href='/'>
                  <p className='card-text btn appButtons'>Full Stack Website</p>
                </a>
              </div>
            </div>
            <div className='col-md-4 btn'>
              <a target='_blank' href='/'>
                <div
                  className='card-img-top frontEndSite'
                  alt='Front-End-Website'
                ></div>
              </a>
              <div className='card-body'>
                <a target='_blank' href='/'>
                  <p className='card-text  btn appButtons'>Front End Website</p>
                </a>
              </div>
            </div>
            <div className='col-md-4 btn'>
              <a target='_blank' href='/'>
                <div
                  className='card-img-top applications'
                  alt='Node-Guessing-Game'
                ></div>
              </a>

              <div className='card-body'>
                <a target='_blank' href='/'>
                  <p className='card-text btn appButtons'>Applications</p>
                </a>
              </div>
            </div>
          </div>
          {/* Row 2 */}
          <div className='row secondTextRow'>
            <div className='col-md-4 btn'>
              <a target='_blank' href='/'>
                <div
                  className='card-img-top maintenance'
                  alt='Maintenance'
                ></div>
              </a>

              <div className='card-body'>
                <a target='_blank' href='/'>
                  <p className='card-text btn appButtons'>Maintenance</p>
                </a>
              </div>
            </div>
            <div className='col-md-4 btn'>
              <a target='_blank' href='/'>
                <div
                  className='card-img-top businessCards'
                  alt='Business-Cards'
                ></div>
              </a>

              <div className='card-body'>
                <a target='_blank' href='/'>
                  <p className='card-text btn appButtons'>Business Cards</p>
                </a>
              </div>
            </div>
            <div className='col-md-4 btn'>
              <a target='_blank' href='/'>
                <div className='card-img-top custom' alt='Custom'>
                  {' '}
                </div>
              </a>

              <div className='card-body'>
                <a target='_blank' href='/'>
                  <p className='card-text btn appButtons'>Custom</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
