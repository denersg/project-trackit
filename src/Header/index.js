import { useContext } from "react";

import UserContext from "../contexts/UserContext";

import { TopBar, Content } from "./style.js";

export default function Header(){
    const { user } = useContext(UserContext);
    
    return(
        <TopBar>
            <Content>
                <span>TrackIt</span>
                <img src={user.image} alt="Foto" />
            </Content>
        </TopBar>
    );
}