import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Museum from './Museum';
import MuseumVideos from './MuseumVideos';

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Museum/>} />
      <Route path="/MuseumVideos" element={<MuseumVideos/>} />
        {/* Add more routes for other subpages */}
      </Routes>
    </Router>
  );
}

export default App;