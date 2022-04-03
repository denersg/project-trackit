import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Login from "./Login";
import Register from "./Register";
import Today from "./Today";
import Habits from "./Habits";
import History from "./History";
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
                    <Route path="/habitos" element={<Habits />}></Route>
                    <Route path="/historico" element={<History />}></Route>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}