import { Link } from 'react-router-dom';
import eraplant from '../assets/images/eraplant.jpg';


import React from 'react';
import TimeCapsuleButton from './TimeCapsuleButton';
const Era = () => {
  return (
    <div className='EraPage'>
      <h1>Era</h1>
    <div className='era-container'>
      <div className='era-grid'>
        <div className='era-item'>
          <button className='era-button'>
          <Link to="/era/eraseventy" className="nav-link">

            <img src={eraplant} alt='70s' />
            </Link>
          </button>
          <p className='era-caption'>70s</p>
        </div>
        <div className='era-item'>
          <button className='era-button'>
            <img src={eraplant} alt='80s' />
          </button>
          <p className='era-caption'>80s</p>
        </div>
        <div className='era-item'>
          <button className='era-button'>
            <img src={eraplant} alt='90s' />
          </button>
          <p className='era-caption'>90s</p>
        </div>
        <div className='era-item'>
          <button className='era-button'>
            <img src={eraplant} alt='2000s' />
          </button>
          <p className='era-caption'>2000s</p>
        </div>
      </div>
    </div>
    <TimeCapsuleButton/>
    </div>
  );
};

export default Era;
