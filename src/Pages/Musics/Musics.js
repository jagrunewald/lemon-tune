import React from 'react';
import './Musics.css';
import Header from '../../Components/Header/Header';

export default function Musics () {
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
        <div className='musics-search'>
          <h2 className='musics-name'>{ getUser() }</h2>
          <a href='' className='musics-favorites'>Favorites</a>
          <a href='' className='musics-logoff'>Logoff</a>
        </div>
        <div className='musics-all'>Teste</div>
      </div>

    </div>
  )
}
