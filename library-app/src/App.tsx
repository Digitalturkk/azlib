import React from 'react';
import './App.css';
import { Navbar } from './Navbar';
import { HomePage } from './HomePage';
import { Footer } from './Footer';

function App() {
  return (
    <div>
    <Navbar/>
    <HomePage/>
    <Footer/>
    </div>
  );
}

export default App;