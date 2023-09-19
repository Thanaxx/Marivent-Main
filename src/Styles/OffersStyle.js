import styled from "styled-components";

export const SpecialOffersWrap = styled.div`
    margin-bottom: 80px;
`;

export const Sptitle = styled.div`
    text-align: center;
    margin: 50px 0;

    h1{
        font-family: 'Playfair Display', serif;
        font-weight: 400;
        font-size: 50px;
        color: #001C41;
    }
`;

export const SpBody = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 50px;
    width: 80%;
    margin: auto;
`;

export const SpCard = styled.div`
    text-align: center;

    img{
        width: 100%;
        object-fit: cover;
        height: 550px;
        margin-bottom: 10px;
    }

    p{
        font-size: 16px;
        font-family: 'Jost', sans-serif;
        color: #373737;
    }

    h1{
        font-family: 'Playfair Display', serif;
        font-weight: 400;
        color: #001C41;
        font-size: 35px;
        padding-top: 10px;
    }

    .rate{
        padding-bottom: 10px;
    }

    button{
        margin-top: 20px;
        padding: 10px 40px;
        background-color: #001C41;
        border-radius: 2px;
        font-family: 'Jost', sans-serif;
        color: white;
        font-size: 12px;
        border: none;
        cursor: pointer;
        transition: 0.3s ease-in-out;
    }

    button:hover{
        transform: scale(1.1);
    }
`;