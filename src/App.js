import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Museum from './Museum';
import Schedule from './Schedule';
import Navbar from "./Navbar";
import MuseumVideos from './MuseumVideos';

function App() {
  return (
    
    <Router>
      { <Navbar /> }
      <Routes>
      <Route exact path='/'  />
      <Route path="/MuseumVideos/:id" element={<MuseumVideos/>} />
      <Route path="/Schedule" element={<Schedule/>} />

        {/* Add more routes for other subpages */}
      </Routes>
    </Router>
  );
}

export default App;