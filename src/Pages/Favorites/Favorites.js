import React, { useState } from 'react';
import './Favorites.css';
import Header from '../../Components/Header/Header';
import Nav from '../../Components/Nav/Nav';

export default function Favorites () {
  const [isFavorites, setIsFavorites] = useState(JSON.parse(localStorage.getItem('isFavorite')));

  function handleChange ({ target }) {
    let newFavorites = [];
    isFavorites.map((favorite) => {
      if(favorite.id !== parseInt(target.value)) {
        newFavorites.push(favorite);
        setIsFavorites(newFavorites);
        localStorage.setItem('isFavorite', JSON.stringify(newFavorites));
      }
    });
    if(isFavorites.length === 1) {
      newFavorites = [];
      setIsFavorites(newFavorites);
      localStorage.setItem('isFavorite', JSON.stringify(newFavorites));

    }
  }

  return (
    <div className='favorites'>
      <Header />
      <Nav />
      <div className='favorites-all'>
      {
            isFavorites ?
            isFavorites.map((favorite) => {
              return (
                <div key={favorite.id} className='favorites-list'>
                  <p>{favorite.name}</p>
                  <audio src={favorite.preview} preload="auto" controls />
                  <input type='checkbox' value={favorite.id} onChange={ (e) => handleChange(e, favorite) } checked />
                </div>
              )
            })
            : ''
          }
      </div>

    </div>
  )
    
}