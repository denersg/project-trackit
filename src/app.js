import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Login from "./Login";
import Register from "./Register";
import Today from "./Today";
import UserContext from "./contexts/UserContext";

export default function App(){
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    const contextValue = { user, setUser };
    
    return(
        <UserContext.Provider value={contextValue} >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />}></Route>
                    <Route path="/cadastro" element={<Register />}></Route>
                    <Route path="/hoje" element={<Today />}></Route>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}