import React from "react";
import { useNavigate } from 'react-router-dom';
import './Nav.css';

export default function Nav () {
  const navigate = useNavigate();

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
      <a href='/albums' className='nav-search'>Search</a>
      <a href='' className='nav-favorites'>Favorites</a>
      <a href='' className='nav-logoff'>Logoff</a>
    </div>

  )
}
