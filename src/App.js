import * as React from "react";
import { Routes, Route } from 'react-router-dom';
import Login from '../src/Pages/Login/Login';
import Albums from '../src/Pages/Albums/Albums';
import Musics from './src/Pages/Musics/Musics';
import Favorites from '../src/Pages/Favorites/Favorites';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/musics" element={<Musics />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
