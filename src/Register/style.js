import styled from 'styled-components';

export const Container = styled.div`
    /* background-color: hotpink; */
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const UserInteraction = styled.div`
    /* background-color: orange; */
    height: 199px;

    position: absolute;
    top: 280px;
`;

export const TopLogo = styled.div`
    /* background-color: violet; */
    width: 180px;
    height: 220px;

    position: absolute;
    top: 70px;
    
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    img{
        width: 160px;
        height: 102px;
    }

    span{
        /* background-color: green; */

        margin-bottom: 50px;

        font-family: Playball;
        font-weight: normal;
        font-size: 68.982px;
        line-height: 86px;
        color: #126BA5;
    }
`;

export const DataInput = styled.div`
    /* background-color: red; */
    width: 305px;
    height: 250px;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    input{
        width: 303px;
        height: 45px;

        padding: 0 10px;
        
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;

        font-weight: normal;
        font-size: 19.976px;
        line-height: 25px;

        outline: none;
    }

    input::placeholder{
        color: #dbdbdb;
    }

    button{
        width: 303px;
        height: 45px;

        background: #52B6FF;
        border-radius: 4.63636px;
        border: none;

        font-weight: normal;
        font-size: 20.976px;
        line-height: 26px;
        color: #fff;
    }
`;

export const GoToLogin = styled.div`
    /* background-color: pink; */
    height: 50px;
    
    display: flex;
    justify-content: center;
    align-items: flex-end;

    span{
        font-weight: normal;
        font-size: 13.976px;
        line-height: 17px;
        text-decoration-line: underline;
        color: #52B6FF;
    }
`;