import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar";
import SearchBar from "./components/SearchBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Map from "./pages/map";
import Home from "./pages/home";


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="home" element={<Home/>}/>
                    <Route path="map" element={<Map/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
