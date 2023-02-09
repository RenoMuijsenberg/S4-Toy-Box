import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Map from "./pages/map";
import Home from "./pages/home";
import Login from "./pages/login";


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/item" element={<Home/>}/>
                    <Route path="map" element={<Map/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
