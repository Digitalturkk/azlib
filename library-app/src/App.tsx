import React from 'react';
import './App.css';
import { Navbar } from './Navbar';
import { HomePage } from './HomePage';
import { Footer } from './Footer';
import {SearchBooksPage} from "./SearchBooksPage/SearchBooksPage";
import { Redirect, Route } from 'react-router-dom';

function App() {
  return (
    <div>
    <Navbar/>

    <Route path="/" exact>
    <Redirect to="/home" />
    </Route>
    <Route path="/home" exact>
    <HomePage/>
    </Route>

    <Route path="/search" exact>
    <SearchBooksPage /> 
    </Route>
    
    <Footer/>
    </div>
  );
}

export default App;