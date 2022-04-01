import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./Login";
import Register from "./Register";
import Header from './Header';
import Today from "./Today";
// import Cadastro from "./Cadastro/cadastro";
// import Hoje from "./Hoje/hoje";
import { useState } from 'react';

export default function App(){
    const [token, setToken] = useState("");
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login setToken={setToken} />}></Route>
                <Route path="/cadastro" element={<Register />}></Route>
                <Route path="/hoje" element={<Today token={token} />}></Route>
            </Routes>
        </BrowserRouter>
    );
}