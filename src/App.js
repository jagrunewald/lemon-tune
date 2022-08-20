import * as React from "react";
import { Routes, Route } from 'react-router-dom';
import Login from '../src/Pages/Login/Login';
import Musics from '../src/Pages/Musics/Musics';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/musics" element={<Musics />} />
      </Routes>
    </div>
  );
}

export default App;
