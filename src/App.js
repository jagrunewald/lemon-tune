import * as React from "react";
import { Routes, Route } from 'react-router-dom';
import Login from '../src/Pages/Login/Login';
import Albums from '../src/Pages/Albums/Albums';
import Musics from "./Pages/Musics/Musics";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/musics" element={<Musics />} />
      </Routes>
    </div>
  );
}

export default App;
