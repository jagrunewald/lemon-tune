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
  const [lengthAlbumList, setLengthAlbumList] = useState(-2);
  console.log(lengthAlbumList);

  function checkAlbum(results) {
    console.log('leeeng if', results.length);
    if(results.length === 0) {
      return (
        <div className='not-found'>
          <p>Not found</p>
        </div>
      )
    } else {
      return (
        <div className='not-found'>
          <p>Teste</p>
        </div>
      )
    }
  }

  function handleChange({ target }) {
    setSearch(target.value);
  }

  async function handleClick () {
    const results = await searchAlbumsAPI(search);
      setAlbumList(results);
      checkAlbum(results);
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
