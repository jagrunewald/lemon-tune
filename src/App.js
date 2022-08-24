import * as React from "react";
import { Routes, Route } from 'react-router-dom';
import Login from '../src/Pages/Login/Login';
import Albums from '../src/Pages/Albums/Albums';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/albums" element={<Albums />} />
      </Routes>
    </div>
  );
}

export default App;
