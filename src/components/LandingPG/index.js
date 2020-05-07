import React from 'react';
import './landingPg.css';

export default function LandingPg() {
  return (
    <div>
      <div className='backgroundImg '>
        {/* First Text Row */}
        <div className='backgroundText container-fluid'>
          <div className='row'>
            <div className='col-md-4 innerFont1'>
              <p className='homeQuote'>
                “Whether you want to uncover the secrets of the universe, or you
                just want to pursue a career in the 21st century, basic computer
                programming is an essential skill to learn.” - Stephen Hawking
              </p>

              <div className='container-fluid continueOnSection'>
                <div className='row'>
                  <p className='col-md-8 innerText1'>
                    Here at Inwood Media, we focus on
                  </p>
                  <h1 className='col-md-4 youText'>YOU.</h1>
                </div>
                {/* Button Row */}

                {/* <div className='row'> */}
                <a className='btn row btnContinue' href='#quote'>
                  See How
                </a>
              </div>

              {/* </div> */}
              {/* <div className='row'> */}
              {/* <p className='homeQuote'>
                  “Whether you want to uncover the secrets of the universe, or
                  you just want to pursue a career in the 21st century, basic
                  computer programming is an essential skill to learn.” -
                  Stephen Hawking
                </p> */}
              {/* </div> */}
            </div>

            {/* <div className='col-md-4 testing'>
              <p className='rightSideText'>
                Stand out online with a professional website,online store, or
                portfolio. With Inwood Media, you can turn any idea into a
                reality.
              </p>
            </div> */}

            <div className='col-md-8 carouselHomeSection'>
              <div className='container-fluid '>
                <div
                  id='carouselExampleIndicators'
                  className='carousel slide'
                  data-ride='carousel'
                >
                  <ol className='carousel-indicators'>
                    <li
                      data-target='#carouselExampleIndicators'
                      data-slide-to='0'
                      className='active'
                    ></li>
                    <li
                      data-target='#carouselExampleIndicators'
                      data-slide-to='1'
                    ></li>
                    <li
                      data-target='#carouselExampleIndicators'
                      data-slide-to='2'
                    ></li>
                  </ol>
                  <div className='carousel-inner'>
                    <div className='carousel-item active'>
                      <img
                        className='d-block w-100'
                        src='https://images.unsplash.com/photo-1555707813-e060038ffc70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
                        alt='First slide'
                      ></img>
                    </div>
                    <div className='carousel-item'>
                      <img
                        className='d-block w-100'
                        src='https://images.idgesg.net/images/article/2018/01/laptop_work_women_business_student-100746061-large.jpg'
                        alt='slides'
                        alt='Second slide'
                      ></img>
                    </div>
                    <div className='carousel-item'>
                      <img
                        className='d-block w-100'
                        src='https://cdn.pixabay.com/photo/2017/08/01/00/17/laptop-2562211_960_720.jpg'
                        alt='Third slide'
                      ></img>
                    </div>
                    <div className='carousel-item'>
                      <img
                        className='d-block w-100'
                        src='https://images.unsplash.com/photo-1553722189-7191c42de7d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
                        alt='Third slide'
                      ></img>
                    </div>
                  </div>
                  <a
                    className='carousel-control-prev'
                    href='#carouselExampleIndicators'
                    role='button'
                    data-slide='prev'
                  >
                    <span
                      className='carousel-control-prev-icon'
                      aria-hidden='true'
                    ></span>
                    <span className='sr-only'>Previous</span>
                  </a>
                  <a
                    className='carousel-control-next'
                    href='#carouselExampleIndicators'
                    role='button'
                    data-slide='next'
                  >
                    <span
                      className='carousel-control-next-icon'
                      aria-hidden='true'
                    ></span>
                    <span className='sr-only'>Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
