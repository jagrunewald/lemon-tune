import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Musics.css';
import getMusics from '../../services/musicsAPI';
import Header from '../../Components/Header/Header';
import Nav from '../../Components/Nav/Nav';

export default function Musics () {
  const location = useLocation();
  const favoritesLocalStorage = JSON.parse(localStorage.getItem('isFavorite'));
  const [musics, setMusics] = useState();
  let allFavorites = favoritesLocalStorage !== null ? favoritesLocalStorage : [];
  console.log('location',location.state.collectionId);

  useEffect(() => {
    async function fetchID() {
      const results = await getMusics(location.state.collectionId);
      results.shift();
      setMusics(results);
    }
    fetchID();
  });

  function handleChange({ target }, music) {
    if(target.checked === true) {
      allFavorites = [ ...allFavorites, {
        id: music.trackId,
        artist: music.artistName,
        name: music.trackName,
        album: music.collectionName,
        preview: music.previewUrl,
      }]
      localStorage.setItem('isFavorite', JSON.stringify(allFavorites));
    }
    if(target.checked === false) {
      const newFavorites = allFavorites.filter(favorite => favorite.id !== music.trackId);
      localStorage.setItem('isFavorite', JSON.stringify(newFavorites));
    }
  }

  return (
    <div className='musics'>
      <Header />
      <Nav listfavorites={allFavorites} />
      <div className='musics-page'>
        <div className='musics-container'>
          <div className='musics-info'>
            <h1>{location.state.artistName}</h1>
            <img src={location.state.artworkUrl100} alt='' />
            <h2>{location.state.collectionName}</h2>
          </div>
          <div className='musics-all'>
          {
            musics ?
            musics.map((music, index) => {
              return (
                <div key={index} className='musics-list'>
                  <p>{music.trackName}</p>
                  <audio src={music.previewUrl} preload="auto" controls />
                  <input type='checkbox' value={music} onChange={ (e) => handleChange(e, music) } />
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
