import styled from "styled-components";

export const HighlightWrap = styled.div`
    background-color: white;
    padding: 50px 150px;
    text-align: center;

    @media screen and (max-width: 1366px){
        padding: 50px;
    }

    @media screen and (max-width: 768px){
        padding: 50px 10px;
    }
`;

export const Htitle = styled.div`
    margin-bottom: 50px;

    h1{
        font-family: 'Playfair Display', serif;
        color: #001C41;
        font-weight: 400;
        font-size: 55px;
        padding: 10px 0;

        @media screen and (max-width: 768px){
            font-size: 35px;
        }
    }

    p{
        color: #141414;
        font-family: 'Jost', sans-serif;
        font-size: 20px;

        @media screen and (max-width: 768px){
            font-size: 16px;
        }
    }
`;

export const HbodyList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;

    @media screen and (max-width: 768px){
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const HighlightList = styled.div`
    img{
        width: 100%;
    }

    h1{
        font-family: 'Playfair Display', serif;
        color: #001C41;
        font-weight: 400;
        font-size: 30px;
        padding: 10px 0;

        @media screen and (max-width: 768px){
            font-size: 25px;
        }
    }

    button{
        padding: 12px 40px;
        border-radius: 2px;
        background-color: #001C41;
        color: white;
        border: none;
        font-family: 'Jost', sans-serif;
        cursor: pointer;
        transition: 0.4s ease-in;
        margin-top: 10px;
        font-size: 12px;

        @media screen and (max-width: 768px){
            padding: 10px 40px;
            margin-top: 5px;
            margin-bottom: 15px;
        }
   }

    button:hover{
        transform: scale(1.1);
    }
`;

export const Hlabel = styled.div`
    margin: 150px 0 100px 0;

    @media screen and (max-width: 1366px){
        margin: 100px 0 30px 0;
    }

    @media screen and (max-width: 768px){
        margin: 50px 0 10px 0;
    }

    h1{
        font-family: 'Playfair Display', serif;
        color: #001C41;
        font-weight: 400;
        font-size: 60px;

        @media screen and (max-width: 1366px){
            font-size: 40px;
        }

        @media screen and (max-width: 768px){
            font-size: 25px;
        }
    }
`;