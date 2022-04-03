import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./Login";
import Register from "./Register";
import Header from './Header';
import Today from "./Today";
// import Cadastro from "./Cadastro/cadastro";
// import Hoje from "./Hoje/hoje";
import { useState } from 'react';
import TokenContext from './contexts/TokenContext';
import UserContext from "./contexts/UserContext";

export default function App(){
    // const [token, setToken] = useState("");
    // const contextValue = { token, setToken };
    const [user, setUser] = useState({});
    const contextValue = { user, setUser };
    return(
        <UserContext.Provider value={contextValue} >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login /*setToken={setToken}*/ />}></Route>
                    <Route path="/cadastro" element={<Register />}></Route>
                    <Route path="/hoje" element={<Today /*token={token}*/ />}></Route>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}