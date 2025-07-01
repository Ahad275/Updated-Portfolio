import React from 'react';
import './App.css';
import Homepage from './Homepage';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';
import Education from './Education';
import Project from './Project';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
        <Header />
      
      <Routes>
      <Route path="/updatedportfolio" element={<Homepage />} />
      <Route path="/" element={<Homepage />} />
      <Route path="/Homepage" element={<Homepage />} />
      
        <Route path="/Education" element={<Education />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
