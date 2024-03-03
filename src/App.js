import React from 'react';
import { BrowserRouter as HashRouter, Routes, Route,  } from 'react-router-dom';
import Museum from './Museum';
import Schedule from './Schedule';
import Navbar from "./Navbar";
import MuseumVideos from './MuseumVideos';
import VideoCatalog from './VideoCatalog';

function App() {
  return (
    
    <HashRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Museum/>} />
          <Route path="/MuseumVideos/:id" element={<MuseumVideos/>} />
          <Route path="/peterson-museum" element={<Museum/>} />
          <Route path="/Schedule" element={<Schedule/>} />
          <Route path="/VideoCatalog" element={<VideoCatalog/>} />
          {/* Add more routes for other subpages */}
          <Route path='*' element={<h1>Error 404: Page not found</h1>} />

        </Routes>
    </HashRouter>
  );
}

export default App;