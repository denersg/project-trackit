import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ThreeDots } from "react-loader-spinner";

import Up from "../assets/up.png";
import { Container, TopLogo, UserInteraction, DataInput, CreateAccount } from "./style.js";

function LoginRequirement({ setToken }){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();

    function handleLogin(e){
        e.preventDefault();
        setLoader(true);

        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", {
            email,
            password
        });
        promise.then(response => {
            setToken(response.data.token);
            console.log(response.data)
            setLoader(false)
            navigate("/hoje");
        });
        promise.catch(error => console.log(error.response));
    }

    return(
        <div>
            <form >
                <DataInput>
                    <input /*Posso colocar ativo ou não, 
                             usando template-strings:
                             disabled | enabled*/
                        type="email"
                        placeholder="email"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        name="email"
                    />
                    <input
                        type="password"
                        placeholder="senha"
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        name="password"
                    />
                    <button type="submit" onClick={handleLogin}>
                        {/*Entrar*/}
                        {loader === true ? <ThreeDots color="#fff" height={20} width={500} /> : "Entrar"}
                    </button>{/*Falta colocar o 'onClick'*/}
                </DataInput>
            </form>
        </div>
    );
}

export default function Login({ setToken }){
    return(
        <Container>
            <TopLogo>
                <img src={Up} alt="Logo" />
                <span>TrackIt</span>
            </TopLogo>

            <UserInteraction>
                <LoginRequirement setToken={setToken}/>

                <CreateAccount>
                    <Link to="/cadastro">
                        <span>Não tem uma conta? Cadastre-se!</span>
                    </Link>
                </CreateAccount>
            </UserInteraction>
        </Container>
    );
}