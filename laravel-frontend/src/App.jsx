import NavBar from "./components/NavBar";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

import "flowbite";
function App() {
    const [isLoggedIn, SetIsLoggedIn] = useState(false);
    console.log(isLoggedIn);
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
                <Route
                    path="/login"
                    element={<Login SetIsLoggedIn={SetIsLoggedIn} />}
                />
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    );
}

export default App;
