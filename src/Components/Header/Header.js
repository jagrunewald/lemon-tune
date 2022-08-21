import React from 'react';
import './Header.css';
import lemon from '../../img/lemon-icon.png';

export default function Header () {
  function getUser () {
    var nameUser = JSON.parse(localStorage.getItem('name'));

    if(nameUser) {
      return nameUser;
    } else {
      return '';
    }
  }

  return (
    <div className='header'>
      <img src={lemon} alt='lemonimg' className='header-icon'/>
      <h1 className='header-title'>Lemon Tune</h1>
      <p className='header-name'>{ getUser() }</p>
    </div>
  )
}
