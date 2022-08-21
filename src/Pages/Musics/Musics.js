import React, { useState } from 'react';
import './Musics.css';
import Header from '../../Components/Header/Header';

export default function Musics () {
  const [search, setSearch] = useState('');

  function handleChange({ target }) {
    setSearch(target.value);
  }

  function handleClick () {
    console.log('clicado');
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
    <div className='musics'>
      <Header />
      <div className='musics-page'>
        <div className='musics-nav'>
          <h2 className='musics-name'>{ getUser() }</h2>
          <a href='' className='musics-favorites'>Favorites</a>
          <a href='' className='musics-logoff'>Logoff</a>
        </div>
        <div className='musics-all'>
          <input type='text' className='input-search' value={search} onChange={ handleChange }></input>
          <button type='button' className='button-search' onClick={ handleClick }>Search</button>
          <div className='musics-all-response'></div>
        </div>
      </div>

    </div>
  )
}
