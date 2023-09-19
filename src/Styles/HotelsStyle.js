import styled from "styled-components";

export const PropertyWrap = styled.div`
    background-color: rgba(217, 217, 217, 0.18);
    padding: 80px 150px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 100px 50px;

    @media screen and (max-width: 1366px){
        grid-gap: 80px 40px;
        padding: 50px;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 70px 0px;
        padding: 80px 10px;
    }
`;

export const PropCont = styled.div`
    text-align: center;

    img{
        width: 50px;
    }

    h1{
        font-family: 'Playfair Display', serif;
        color: #001C41;
        font-weight: 400;
        font-size: 35px;
        padding: 10px 0;

        @media screen and (max-width: 1366px){
            font-size: 30px;
        }
    }

    p{
        color: #141414;
        font-family: 'Jost', sans-serif;
        font-size: 16px;

        @media screen and (max-width: 768px){
            font-size: 15px;
        }
    }

    button{
        padding: 10px 20px;
        margin-top: 20px;
        background-color: #001C41;
        border-radius: 4px;
        border: none;
        outline: none;
        font-family: 'Jost', sans-serif;
        color: white;
        cursor: pointer;
        transition: 0.3s ease-in;
        font-size: 12px;

        @media screen and (max-width: 768px){
            padding: 10px 40px;
            font-size: 11px;
        }
    }

    button:hover{
        transform: scale(1.1);
    }
`;