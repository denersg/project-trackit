import styled from "styled-components";

export const TopBar = styled.header`
    width: 100%;
    height: 70px;

    position: fixed;
    top: 0px;
    z-index: 1;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

export const Content = styled.div`
    width: 95%;

    display: flex;
    justify-content: space-between;

    span{
        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 38.982px;
        line-height: 49px;
        color: white;
    }

    img{
        width: 51px;
        border-radius: 50%;
    }
`;