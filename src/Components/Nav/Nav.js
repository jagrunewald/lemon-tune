import React from "react";
import './Nav.css';

export default function Nav () {
  function getUser () {
    var nameUser = JSON.parse(localStorage.getItem('name'));

    if(nameUser) {
      return nameUser;
    } else {
      return '';
    }
  }

  return (
    <div className='nav'>
      <h2 className='nav-name'>{ getUser() }</h2>
      <a href='' className='nav-search'>Search</a>
      <a href='' className='nav-favorites'>Favorites</a>
      <a href='' className='nav-logoff'>Logoff</a>
    </div>

  )
}
