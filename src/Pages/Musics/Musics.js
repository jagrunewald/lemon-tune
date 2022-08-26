import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import getMusics from '../../services/musicsAPI';

export default function Musics () {
  const location = useLocation();
  const [musics, setMusics] = useState();

  useEffect(() => {
    async function fetchID() {
      const results = await getMusics(location.state);
      setMusics(results);
    }
    fetchID();
  });

  return (
    <div className='musics'>
     {
      musics ?
      musics.map((music, index) => {
        return (
          <div key={index} className='musics-list'>
            <p>{music.trackName}</p>
          </div>
        )
      })
      : ''
     }
    </div>
  )
}
