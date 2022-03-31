import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Up from "../assets/up.png";
import {
    Container,
    TopLogo,
    UserInteraction,
    DataInput,
    GoToLogin
} from "./style";

function RequestRegistration(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const navigate = useNavigate();

    /* Na tela de cadastro ainda não vai ser mostrado o TOKEN,
       quando eu der 'console.log(response.data)'. Ele só será
       mostrado quando eu fizer Login. */
    function handleSignUp(e){
        e.preventDefault();

        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", {
            email,
            name,
            image,
            password
        });
        promise.then(response => {
            console.log(response.data);
            navigate("/");
        });
        promise.catch(error => console.log(error.response));
    }

    return(
        <form>
            <DataInput>
                <input
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
                <input
                    type="text"
                    placeholder="nome"
                    onChange={e => setName(e.target.value)}
                    value={name}
                    name="name"
                />
                <input
                    type="text"
                    placeholder="foto"
                    onChange={e => setImage(e.target.value)}
                    value={image}
                    name="image"
                />
                {/* Botão de Cadastro */}
                <button type="submit" onClick={handleSignUp}>Cadastrar</button>
            </DataInput>
        </form>
    );
}

export default function Register(){
    return(
        <Container>
            <TopLogo>
                <img src={Up} alt="Logo" />
                <span>TrackIt</span>
            </TopLogo>

            <UserInteraction>
                <RequestRegistration />

                <GoToLogin>
                    <Link to="/">
                        <span>Já tem uma conta? Faça login!</span>
                    </Link>
                </GoToLogin>
            </UserInteraction>
        </Container>
    );
}