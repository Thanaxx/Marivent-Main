import styled from "styled-components";

export const TaglineWrap = styled.div`
    background-color: #001C41;
    border-bottom: 1px solid white;
    padding: 80px 0;
`;

export const TaglineText = styled.div`
    text-align: center;
    width: 80%;
    margin: auto;

    h1{
        font-size: 40px;
        color: white;
        font-family: 'Playfair Display SC', serif;
        
        @media screen and (max-width: 1000px){
            font-size: 30px;
        }
    }

    @media screen and (max-width: 1000px){
        width: 100%;
    }
`;

export const LearnmoreBtn = styled.button`
    border: 1px solid white;
    padding: 14px 20px;
    outline: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 30px;
    color: #001C41;
    font-weight: 700;
    transition: 0.3s;

    :hover{
        background-color: #001C41;
        border: 1px solid white;
        color: white;
    }
`;