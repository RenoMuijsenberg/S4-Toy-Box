import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div>
      <SearchBar />
      <Navbar/>
    </div>
  );
}

export default App;
