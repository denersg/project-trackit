import axios from "axios";
import { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";

import Header from "../Header";
import Footer from "../Footer";

import {
    Container, Content,
    HabitContent, Top,
    HabitListBox, DaysOfWeek,
    Interactivity, Date,
    CancelButton, SaveButton
} from "./style.js";

function Day({day, index}){
    const [selected, setSelected] = useState(false);
    return(
        <Date
            colorSelect={selected}
            onClick={() => setSelected(state => !state)
        }>
            {day.name}
        </Date>
    );
}

function ListHabits(){
    const [week, setWeek] = useState([
        {
            name: "D"
        },{
            name: "S"
        },{
            name: "T"
        },{
            name: "Q"
        },{
            name: "Q"
        },{
            name: "S"
        },{
            name: "S"
        }
    ]);
    const [isClickedOnAddButton, setIsClickedOnAddButton] = useState(false);
    const { user } = useContext(UserContext);
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const config = {
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    }

    //Função de submissão do formulário (não finalizada)
    function handleAddHabit(e){}

    function addNewHabitToList(){
        return(
            <>
                <form onSubmit={handleAddHabit}>
                    <input type="text" placeholder="nome do hábito" />
                    <DaysOfWeek>
                        <div>
                            {week.map((d, index) => {
                                return(
                                    <Day key={index} day={d} index={index}/>
                                );
                            })}
                        </div>
                    </DaysOfWeek>
                    <Interactivity>
                        <CancelButton className="cursor">Cancelar</CancelButton>
                        <SaveButton className="cursor">Salvar</SaveButton>
                    </Interactivity>
                </form>

                <p>
                    Você não tem nenhum hábito cadastrado ainda.
                    Adicione um hábito para começar a trackear!
                </p>
            </>
        );
    }
    
    return(
        <HabitContent>
            <Top>
                <span>Meus hábitos</span>
                <button className="cursor" onClick={() => setIsClickedOnAddButton(true)}>+</button>
            </Top>

            <HabitListBox>
                {!isClickedOnAddButton ? (
                    <p>
                        Você não tem nenhum hábito cadastrado ainda.
                        Adicione um hábito para começar a trackear!
                    </p>
                ):
                (
                    <>
                        {addNewHabitToList()}
                    </>
                )}
            </HabitListBox>
        </HabitContent>
    );
}

export default function Habits(){
    return(
        <Container>
            <Header/>

            <Content>
                <ListHabits/>
            </Content>

            <Footer/>
        </Container>
    );
}