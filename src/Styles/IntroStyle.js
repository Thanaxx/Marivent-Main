import styled from "styled-components";

export const IntroWrap = styled.div`
    padding: 100px 0;
    border-bottom: 1px solid #001C41;

    @media screen and (max-width: 1000px){
        padding: 80px 0;
    }
`;

export const IntroText = styled.div`
    width: 80%;
    margin: auto;
    text-align: center;

    h3{
        font-size: 20px;
        color: #001C41;
        font-weight: 500;
    }

    @media screen and (max-width: 1000px){
        width: 90%;
    }
`;