import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom';
import { Button} from './Button';

function Hero({
    lightBg,
    topLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    imgStart,
    path 
  }) {
    return (
      <>
        <div
          className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
        >
          <div className='container-hero'>
            <div
              className='row-hero home__hero-row'
              style={{
                display: 'flex',
                flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
              }}
            >
              <div className='col-hero'>
                <div className='home__hero-text-wrapper'>
                  <div className='top-line'>{topLine}</div>
                  <h1 className={lightText ? 'heading' : 'heading dark'}>
                    {headline}
                  </h1>
                  <hr style={{width:'100px', fontWeight:'bolder'}} />
                  <p
                    className={
                      lightTextDesc
                        ? 'home__hero-subtitle'
                        : 'home__hero-subtitle dark'
                    }
                  >
                    {description}
                  </p>
                  {/*<Link to={path}>
                    <Button buttonSize='btn--wide' buttonColor='blue'>
                      {buttonLabel}
                    </Button>
                  </Link>*/}
                </div>
              </div>
              <div className='col-hero'>
                <div className='home__hero-img-wrapper'>
                  <img src={img} alt={alt} className='home__hero-img' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

export default Hero
