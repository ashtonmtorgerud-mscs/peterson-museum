import React from 'react';
import { HashRouter as HashRouter, Routes, Route,  } from 'react-router-dom';
import Museum from './Museum';
import Schedule from './Schedule';
import Navbar from "./Navbar";
import MuseumVideos from './MuseumVideos';
import VideoCatalog from './VideoCatalog';
import AboutUs from './AboutUs';
import Footer from './Footer';
import ErrorFOF from './ErrorFOF';

function App() {
  return (
    
    <HashRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Museum/>} />
          <Route path="/MuseumVideos/:id" element={<MuseumVideos/>} />
          <Route path="/#/MuseumVideos/:id" element={<MuseumVideos/>} />
          <Route path="/peterson-museum" element={<Museum/>} />
          <Route path="/Schedule" element={<Schedule/>} />
          <Route path="/#/Schedule" element={<Schedule/>} />
          <Route path="/VideoCatalog" element={<VideoCatalog/>} />
          <Route path="/#/VideoCatalog" element={<VideoCatalog/>} />
          <Route path="/AboutUs" element={<AboutUs/>} />
          <Route path="/#/AboutUs" element={<AboutUs/>} />
          <Route path="/Footer" element={<Footer/>} />
          <Route path="/#/Footer" element={<Footer/>} />

          
          {/* Add more routes for other subpages */}
          <Route path='*' element={<ErrorFOF/>} />
        </Routes>
      <Footer/>
    </HashRouter>
  );
}

export default App;