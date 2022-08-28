import React, { useState, useEffect } from 'react';
import './Musics.css';
import { useLocation } from 'react-router-dom';
import getMusics from '../../services/musicsAPI';
import Header from '../../Components/Header/Header';
import Nav from '../../Components/Nav/Nav';

export default function Musics () {
  const location = useLocation();
  const [musics, setMusics] = useState();
  // const [checked, setChecked] = useState(false);
  const [favorites, setFavorites] = useState([]);

  // console.log(favorites);

  useEffect(() => {
    async function fetchID() {
      const results = await getMusics(location.state.collectionId);
      results.shift();
      setMusics(results);
    }
    fetchID();
  });

  function handleChange({ target }) {
    if(target.checked === true) {
      setFavorites([ ...favorites, target.value ]);
    }
    if(target.checked === false) {
      const newFavorites = favorites.filter(favorite => favorite !== target.value);
      setFavorites(newFavorites);
    }  
  }

  return (
    <div className='musics'>
      <Header />
      <Nav />
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
                  <input type='checkbox' value={music.trackId} onChange={ handleChange } />
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
