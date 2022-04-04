import styled from "styled-components";

export const Container = styled.main`
    background-color: #F2F2F2;
    height: 100vh;

    display: flex;
    justify-content: center;
`;

export const Content = styled.div`
    width: 95%;

    position: relative;
    top: 92px;
`;

export const HabitContent = styled.div`
    padding: 0px 13px;
`;

export const Top = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 20px;
    
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 29px;
    color: #126BA5;

    button{
        width: 40px;
        height: 35px;

        border-radius: 5px;
        border: none;
        background-color: #52B6FF;

        font-size: 27px;
        line-height: 34px;
        color: #FFFFFF;
    }
`;

export const HabitListBox = styled.div`
    p{
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #666666;
    }

    form{
        width: 340px;
        height: 180px;

        padding: 18px;
        margin-bottom: 30px;

        background: #FFFFFF;
        border-radius: 5px;
        box-shadow: 4px 2px 5px rgba(102, 102, 102, 0.2);
    }

    form input{
        width: 303px;
        height: 45px;

        padding-left: 11px;

        border: 2px solid #D5D5D5;
        border-radius: 5px;

        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #666666;
    }
    form input::placeholder{
        color: #DBDBDB;
    }
    form input:focus{
        outline: none;
    }
`;

export const DaysOfWeek = styled.div`
    div{
        width: 234px;

        display: flex;
        justify-content: space-between;

        margin-top: 8px;
    }
`;

export const Date = styled.span`
    background-color: ${props => props.colorSelect && "#CFCFCF"};

    width: 30px;
    height: 30px;

    display: flex;
    justify-content: center;

    padding: 2px;

    border: 1px solid #D5D5D5;
    border-radius: 5px;

    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #DBDBDB;
`;

export const Interactivity = styled.div`
    height: 64px;

    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    button{
        width: 84px;
        height: 35px;
        border: none;
        font-family: 'Lexend Deca';
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
    }
    
`;

export const CancelButton = styled.button`
    background-color: transparent;

    color: #52B6FF;

    :hover{
        color: #5288ff;
    }
`;

export const SaveButton = styled.button`
    background-color: #52B6FF;
    border-radius: 5px;

    color: #FFFFFF;

    :hover{
        background-color: rgba(82, 182, 255, 0.7);
    }
`;