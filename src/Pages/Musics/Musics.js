import React, { useState } from 'react';
import './Musics.css';
import searchAlbumsAPI from '../../services/searchMusicAPI';
import getMusics from '../../services/musicsAPI';
import Header from '../../Components/Header/Header';

export default function Musics () {
  const [search, setSearch] = useState('');
  const [albumList, setAlbumList] = useState(null);

  function handleChange({ target }) {
    setSearch(target.value);
  }

  async function handleClick () {
    const results = await searchAlbumsAPI(search);
    setAlbumList(results);
  };

  // function getReturn () {
  //   if (search === '') {
  //     return '';
  //   } else if (albumList.lenght === 0) {
  //     return 'Não encontrado';
  //   }
  // }

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
          <div className='musics-all-response'>
            {
              albumList ?
              albumList.map((album) => {
                console.log(album.collectionName);
                return (
                  <div className='album-list'>
                  <p>{album.artistName}</p>
                  <img src={album.artworkUrl100} alt='' />
                  <p>{album.collectionName}</p>
                </div>
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
