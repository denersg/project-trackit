import axios from "axios";
import { useContext, useState, useEffect } from "react";
import UserContext from "../contexts/UserContext";

import Prog from "../assets/programmer.jpg";
import { TopBar, Content } from "./style.js";

export default function Header(){
    const [image, setImage] = useState([]);
    const { user } = useContext(UserContext);
    
    // useEffect(() => {
    //     const config = {
    //         headers: {
    //             Authorization: `Bearer ${user.token}`
    //         }
    //     };

    //     const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", config);
        
    //     promise.then(response => {
    //         console.log(response.data);
    //         setImage(response.data);
    //     });
    //     promise.catch(error => console.log(error.response));
    // }, []);
    
    return(
        <TopBar>
            <Content>
                <span>TrackIt</span>
                {/* Essa foto vai vir da API */}
                <img src={Prog} alt="Foto" />
            </Content>
        </TopBar>
    );
}