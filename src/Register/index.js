import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

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
    const [loader, setLoader] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const navigate = useNavigate();

    function handleSignUp(e){
        e.preventDefault();
        setLoader(true);
        setIsDisabled(true);

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
        promise.catch(error => {
            console.log(error.response);
            alert("Falha ao enviar os dados!\nPor favor, verifique as informações e insira os dados corretamente.");
            setIsDisabled(false);
            setLoader(false);
        });
    }

    return(
        <form onSubmit={handleSignUp}>
            <DataInput>
                <input
                    disabled={isDisabled}
                    type="email"
                    placeholder="email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    name="email"
                />
                <input
                    disabled={isDisabled}
                    type="password"
                    placeholder="senha"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    name="password"
                />
                <input
                    disabled={isDisabled}
                    type="text"
                    placeholder="nome"
                    onChange={e => setName(e.target.value)}
                    value={name}
                    name="name"
                />
                <input
                    disabled={isDisabled}
                    type="text"
                    placeholder="foto"
                    onChange={e => setImage(e.target.value)}
                    value={image}
                    name="image"
                />
                {/* Botão de Cadastro */}
                <button type="submit" className="cursor">
                    {loader === true ? <ThreeDots color="#fff" height={20} width={500} /> : "Cadastrar"}
                </button>
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