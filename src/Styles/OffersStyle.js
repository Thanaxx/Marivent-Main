import styled from "styled-components";

export const OffersWrap = styled.div`
    /* background-color: grey; */
    padding: 20px 50px;

    @media screen and (max-width: 1025px) {
        padding: 20px;
    }
`;

export const OffersBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
`;

export const OffersElement = styled.div`
    width: 50%;
    text-align: center;
    /* background-color: salmon; */
    margin: 20px 0;
    padding: 20px 0;

    @media screen and (max-width: 1025px) {
        padding: 10px;
        width: 50%;
    }

    @media screen and (max-width: 780px) {
        width: 100%;
        padding: 0;
    }
`;

export const OffersImage = styled.div`
    img{
        width: 550px;
        height: 350px;

        @media screen and (max-width: 1025px) {
            width: 400px;
            height: 300px;
        }

        @media screen and (max-width: 780px) {
            width: 700px;
            height: 300px;
        }

        @media screen and (max-width: 540px) {
            width: 330px;
            height: 300px;
        }
    }
`;

export const OffersDetails = styled.div`
    width: 550px;
    margin: auto;
    /* background-color: goldenrod; */

    @media screen and (max-width: 1025px) {
        width: auto;
    }

    @media screen and (max-width: 780px) {
        width: 100%;
    }

    h1{
        color: #001C41;
        letter-spacing: 1px;
        font-size: 28px;
    }

    .title{
        color: #565656;
        margin-top: 10px;
        font-size: 16px;
    }

    p{
        padding: 5px 0;
        color: #001C41;
        font-size: 15px;
    }

    .line-b{
        border-bottom: 1px solid #757575;
    }
`;

export const OffersBtn = styled.div`
    margin-top: 15px;
`;

export const LearnMoreBtn = styled.button`
    background-color: #C39321;
    color: #FFF;
    border-radius: 4px;
    border: none;
    outline: none;
    padding: 12px 20px;
    text-decoration: none;
    cursor: pointer;
    transition: 0.3s;

    :hover{
        background-color: #81631C;
        
    }
`;