import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Albums.css';
import searchAlbumsAPI from '../../services/searchMusicAPI';
import Header from '../../Components/Header/Header';
import Nav from '../../Components/Nav/Nav';

export default function Musics () {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [albumList, setAlbumList] = useState(null);
  const [notFound, setNotFound] = useState('');

  function handleChange({ target }) {
    setSearch(target.value);
  }

  async function handleClick () {
    setNotFound('');
    const results = await searchAlbumsAPI(search);
    if(results.length === 0) {
      setNotFound('Álbum not found');
    }

    setAlbumList(results);
  };

  function albumMusics (album) {
    navigate('/musics', { state: album })
  }

  return (
    <div className='albums'>
      <Header />
      <Nav />
      <div className='albums-page'>
        <div className='albums-all'>
          <input type='text' className='input-search' value={search} onChange={ handleChange }></input>
          <button type='button' className='button-search' onClick={ handleClick }>Search</button>
          <div className='not-found'>
            <h3 className='msg-not-found'>{notFound}</h3>
          </div>
          <div className='albums-all-response'>
            {
              albumList ?
              albumList.map((album) => {
                return (
                  <button type='button' key={album.collectionId} className='albums-list' onClick={ () => albumMusics(album) }>
                    <div>
                      <p>{album.artistName}</p>
                      <img src={album.artworkUrl100} alt='' className='img'/>
                      <p>{album.collectionName}</p>
                    </div>
                  </button>
                )
              })
              :
              ''
            }
          </div>
        </div>
      </div>

    </div>
  )
}
