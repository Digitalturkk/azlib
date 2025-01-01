import React from 'react';
import './App.css';
import { Navbar } from './Navbar';
import { HomePage } from './HomePage';
import { Footer } from './Footer';
import {SearchBooksPage} from "./SearchBooksPage/SearchBooksPage";

function App() {
  return (
    <div>
    <Navbar/>
    {/*<HomePage/>*/}
    <SearchBooksPage /> 
    <Footer/>
    </div>
  );
}

export default App;