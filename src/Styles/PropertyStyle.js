import styled from "styled-components";

export const PropertyMain = styled.div`

`;

export const Btitle = styled.div`
    margin-top: 50px;

    @media screen and (max-width: 768px ) {
        margin-top: 25px;
    }

    h1{
        font-family: 'Playfair Display', serif;
        font-weight: 400;
        font-size: 50px;
        text-align: center;
        color: #001C41;

        @media screen and (max-width: 1366px ) {
            font-size: 45px;
        }

        @media screen and (max-width: 768px ) {
            font-size: 30px;
        }
    }
`;

export const Bcover = styled.div`
    text-align: center;
    margin: 50px 0;

    @media screen and (max-width: 768px ) {
        margin: 20px 0;
    }

    img{
        width: 90%;
        height: 80vh;
        object-fit: cover;

        @media screen and (max-width: 768px ) {
            height: 30vh;
        }
    }
`;

export const Blogo = styled.div`
    text-align: center;

    img{
        width: 350px;

        @media screen and (max-width: 768px ) {
            width: 250px;
        }
    }
`;

export const Bdesc = styled.div`
    width: 80%;
    margin: 10px auto 50px auto;

    @media screen and (max-width: 768px){
        width: 95%;
    }

    p{
        text-align: center;
    }
`;

export const Bbuttons = styled.div`
    text-align: center;

    @media screen and (max-width: 768px){
        margin-top: 20px;
    }

    button{
        padding: 10px 40px;
        margin: 30px 10px 20px 10px;
        border: none;
        outline: none;
        border-radius: 4px;
        color: white;
        background-color: #001C41;
        transition: 0.3s ease-in;
        cursor: pointer;
        font-family: 'Jost', sans-serif;

        @media screen and (max-width: 768px){
            margin: 10px 10px 0px 10px;
            width: 60%;
            font-size: 12px;
        }
    }

    button:hover{
        transform: scale(1.1);
    }
`;

export const BListOffers = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    width: 80%;
    margin: auto;
    text-align: center;

    @media screen and (max-width: 768px){
        grid-template-columns: repeat(1, 1fr);
        width: 98%;
    }

    h1{
        font-family: 'Playfair Display', serif;
        font-weight: 400;
        font-size: 35px;
        color: #001C41;
        margin-bottom: 10px;

        @media screen and (max-width: 768px){
            font-size: 30px;
        }
    }
`;

export const BListOffersB = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
    width: 50%;
    margin: auto;
    text-align: center;

    @media screen and (max-width: 768px){
        width: 98%;
    }

    h1{
        font-family: 'Playfair Display', serif;
        font-weight: 400;
        font-size: 35px;
        color: #001C41;
        margin-bottom: 10px;
    }
`;

export const ListOffers = styled.div`
    img{
        width: 100%;
        margin-bottom: 10px;
        height: 550px;
        object-fit: cover;
    }

    p{
        font-family: 'Jost', sans-serif;
        font-weight: 400;
        font-size: 16px;
    }

    button{
        padding: 10px 30px;
        border: 1px solid #ffffff;
        background-color: #001C41;
        color: #ffffff;
        border-radius: 4px;
        margin: 20px 0 40px 0;
        cursor: pointer;
        font-family: 'Jost', sans-serif;
        transition: 0.3s ease-in;

        @media screen and (max-width: 768px){
            font-size: 12px;
            padding: 9px 30px;
            margin: 20px 0 40px 0;
        }
    }

    button:hover{
        transform: scale(1.1);
    }
`;