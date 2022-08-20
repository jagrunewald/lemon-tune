import React from 'react';
import './Header.css';
import lemon from '../../img/lemon-icon.png';

export default function Header () {
  return (
    <div className='header'>
      <img src={lemon} alt='lemonimg' className='header-icon'/>
      <h1 className='header-title'>Lemon Tune</h1>
    </div>
  )
}
