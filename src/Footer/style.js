import styled from "styled-components";

export const BottomBar = styled.footer`
    width: 100%;
    height: 70px;

    position: fixed;
    bottom: 0px;
    z-index: 1;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: white;
    border: 1px solid aqua;
`;

export const Content = styled.div`
    /* background-color: orange; */
    width: 85%;

    display: flex;
    justify-content: space-between;

    span{
        z-index: 2;
        
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #52B6FF;
    }

    div{
        /* background-color: aquamarine; */
        width: 85%;

        position: absolute;
        bottom: 10px;

        display: flex;
        justify-content: center;
    }

    p{
        /* background-color: pink; */
        width: 91px;
        height: 91px;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 50%;
        padding: 6px;
        background-color: #52B6FF;

        span{
            width: 91px;
            height: 98px;
            position: absolute;

            display: flex;
            justify-content: center;
            align-items: center;
            
            /* background-color: hotpink; */
            color: white;
        }
    }
`;