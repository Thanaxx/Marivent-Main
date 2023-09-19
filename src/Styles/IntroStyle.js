import styled from "styled-components";

export const IntroWrap = styled.div`
    padding: 100px 0;
    /* border-bottom: 1px solid #001C41; */

    @media screen and (max-width: 1000px){
        padding: 80px 0;
    }
`;

export const IntroText = styled.div`
    width: 80%;
    margin: auto;
    text-align: center;

    @media screen and (max-width: 768px){
        width: 100%;
    }

    h1{
        font-family: 'Playfair Display', serif;
        font-weight: 400;
        font-size: 50px;
        color: #001C41;
        margin-bottom: 10px;

        @media screen and (max-width: 1366px){
            font-size: 35px;
        }

        @media screen and (max-width: 768px){
            font-size: 25px;
        }
    }

    h3{
        font-size: 20px;
        color: #1F1F1F;
        font-weight: 500;
        font-weight: 400;

        @media screen and (max-width: 1366px){
            font-size: 18px;
        }

        @media screen and (max-width: 768px){
            font-size: 16px;
        }
    }

    @media screen and (max-width: 1000px){
        width: 90%;
    }
`;

export const MariventLogo = styled.div`
    text-align: center;
`;

export const OffersBtn = styled.div`
   text-align: center;
   margin-top: 30px;

   button{
    padding: 12px 40px;
    border-radius: 2px;
    background-color: #001C41;
    color: white;
    border: none;
    font-family: 'Jost', sans-serif;
    cursor: pointer;
    transition: 0.4s ease-in;
    font-size: 12px;

    @media screen and (max-width: 768px){
        padding: 10px 40px;
    }
   }

   button:hover{
        transform: scale(1.1);
    }
`;

