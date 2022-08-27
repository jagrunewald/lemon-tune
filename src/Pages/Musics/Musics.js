import React, { useState, useEffect } from 'react';
import './Musics.css';
import { useLocation } from 'react-router-dom';
import getMusics from '../../services/musicsAPI';
import Header from '../../Components/Header/Header';
import Nav from '../../Components/Nav/Nav';

export default function Musics () {
  const location = useLocation();
  const [musics, setMusics] = useState();

  useEffect(() => {
    async function fetchID() {
      const results = await getMusics(location.state.collectionId);
      results.shift();
      setMusics(results);
    }
    fetchID();
  });

  return (
    <div className='musics'>
      <Header />
      <Nav />
      <div className='musics-page'>
        <div className='musics-container'>
          <div className='musics-info'>
            <h1>{location.state.artistName}</h1>
            <img src={location.state.artworkUrl100} alt='' />
            <p>{location.state.collectionName}</p>
          </div>
          <div className='musics-all'>
          {
            musics ?
            musics.map((music, index) => {
              return (
                <div key={index} className='musics-list'>
                  <p>{music.trackName}</p>
                  <audio src={music.previewUrl} preload="auto" controls />
                  <input type='checkbox' id='favourites'/>
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
