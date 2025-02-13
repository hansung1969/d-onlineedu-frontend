import React from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import Userlist from './components/Userlist';
import Userform from './components/Userform';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
  <BrowserRouter>
    <Header/>
      <header className="App-header">
      <Routes>
        <Route path="/home"  element={<Home/>} exact></Route>
        <Route path="/userlist"  element={<Userlist/>} exact></Route>
        <Route path="/userform"  element={<Userform/>} exact></Route>
      </Routes>
      </header> 
  </BrowserRouter>
    </div>
  );
}
export default App;
