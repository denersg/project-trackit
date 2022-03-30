import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./Login";
import Register from "./Register";
// import Cadastro from "./Cadastro/cadastro";
// import Hoje from "./Hoje/hoje";
import { useState } from 'react';

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/cadastro" element={<Register />}></Route>
            </Routes>
        </BrowserRouter>
    );
}