import React from "react";
import { useNavigate } from 'react-router-dom';
import './Nav.css';

export default function Nav (listfavorites) {
  const navigate = useNavigate();

  // console.log('lista de favoritos', listfavorites);

  function onClick () {
    navigate('/favorites', { state: listfavorites });
  }

  function onLogoff () {
    localStorage.clear();
    navigate('/');
  }

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
      <button type='button' className='nav-favorites' onClick={ onClick }>Favorites</button>
      <button type='button' className='nav-logoff' onClick={ onLogoff }>Logoff</button>
    </div>

  )
}
