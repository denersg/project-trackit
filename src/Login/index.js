import axios from "axios";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

import UserContext from "../contexts/UserContext";

import Up from "../assets/up.png";
import {
    Container, TopLogo,
    UserInteraction, DataInput, CreateAccount
} from "./style.js";

function LoginRequirement(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loader, setLoader] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    function handleLogin(e){
        e.preventDefault();
        setLoader(true);
        setIsDisabled(true);

        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", {
            email,
            password
        });
        promise.then(response => {
            //Persistência dos dados no 'localStorage'
            localStorage.setItem('user', JSON.stringify({
                id: response.data.id,
                name: response.data.name,
                image: response.data.image,
                email: response.data.email,
                password: response.data.password,
                token: response.data.token
            }));
            setUser(JSON.parse(localStorage.getItem("user")));
            
            navigate("/hoje");
        });
        promise.catch(error => {
            console.log(error.response);
            alert("E-mail e/ou senha incorretos!\nPor favor, insira os dados corretamente.");
            setIsDisabled(false);
            setLoader(false);
        });
    }

    return(
        <div>
            <form onSubmit={handleLogin}>
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
                    <button type="submit" className="cursor">
                        
                        {loader === true ? <ThreeDots color="#fff" height={20} width={500} /> : "Entrar"}
                        
                    </button>
                </DataInput>
            </form>
        </div>
    );
}

export default function Login(){
    return(
        <Container>
            <TopLogo>
                <img src={Up} alt="Logo" />
                <span>TrackIt</span>
            </TopLogo>

            <UserInteraction>
                <LoginRequirement />

                <CreateAccount>
                    <Link to="/cadastro">
                        <span>Não tem uma conta? Cadastre-se!</span>
                    </Link>
                </CreateAccount>
            </UserInteraction>
        </Container>
    );
}