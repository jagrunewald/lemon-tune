import React, { useState } from 'react';
import './Albums.css';
import searchAlbumsAPI from '../../services/searchMusicAPI';
import getMusics from '../../services/musicsAPI';
import Header from '../../Components/Header/Header';

export default function Musics () {
  const [search, setSearch] = useState('');
  const [albumList, setAlbumList] = useState(null);
  const [musics, setMusics] = useState(null);

  function handleChange({ target }) {
    setSearch(target.value);
  }

  async function handleClick () {
    const results = await searchAlbumsAPI(search);
    setAlbumList(results);
  };

  function getUser () {
    var nameUser = JSON.parse(localStorage.getItem('name'));

    if(nameUser) {
      return nameUser;
    } else {
      return '';
    }
  }

  return (
    <div className='albums'>
      <Header />
      <div className='albums-page'>
        <div className='albums-nav'>
          <h2 className='albums-name'>{ getUser() }</h2>
          <a href='' className='albums-favorites'>Favorites</a>
          <a href='' className='albums-logoff'>Logoff</a>
        </div>
        <div className='albums-all'>
          <input type='text' className='input-search' value={search} onChange={ handleChange }></input>
          <button type='button' className='button-search' onClick={ handleClick }>Search</button>
          <div className='albums-all-response'>
            {
              albumList ?
              albumList.map((album) => {
                return (
                  <button type='button' className='albums-list'>
                    <div>
                      <p>{album.artistName}</p>
                      <img src={album.artworkUrl100} alt='' />
                      <p>{album.collectionName}</p>
                    </div>
                  </button>
                )
              })
              : ''
            }
          </div>
        </div>
      </div>

    </div>
  )
}
