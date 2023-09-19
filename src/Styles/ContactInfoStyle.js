import styled from "styled-components";

export const ContactWrap = styled.div`
    margin: 50px 0;
`;

export const ContactTitle = styled.div`

    h1{
        font-family: 'Playfair Display', serif;
        color: #001C41;
        font-weight: 400;
        font-size: 40px;
        text-align: center;

        @media screen and (max-width: 768px){
            font-size: 35px;
        }
    }

    margin-bottom: 50px;
`;

export const ContactBataan = styled.div`
    padding-bottom: 50px;
`;

export const ContactImg = styled.div`
    text-align: center;

    img{
        width: 300px;
    }
`;

export const ContactListLcbb = styled.div`
    width: 80%;
    margin: 20px auto 40px auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;

    @media screen and (max-width: 1366px){
        width: 90%;
    }

    @media screen and (max-width: 768px){
        width: 95%;
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const ContactListQc = styled.div`
    width: 80%;
    margin: 20px auto 40px auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;

    @media screen and (max-width: 1366px){
        width: 90%;
    }

    @media screen and (max-width: 768px){
        width: 95%;
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const ContactListWed = styled.div`
    width: 80%;
    margin: 20px auto 40px auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;

    @media screen and (max-width: 1366px){
        width: 90%;
    }

    @media screen and (max-width: 768px){
        width: 95%;
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const ContactListVs = styled.div`
    width: 80%;
    margin: 20px auto 40px auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;

    @media screen and (max-width: 1366px){
        width: 90%;
    }

    @media screen and (max-width: 768px){
        width: 95%;
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const ContactListSports = styled.div`
    width: 80%;
    margin: 20px auto 40px auto;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 30px;

    @media screen and (max-width: 1366px){
        width: 90%;
    }

    @media screen and (max-width: 768px){
        width: 95%;
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const ContactCol = styled.div`
    text-align: center;

    h2{
        font-family: 'Jost', sans-serif;
        font-weight: 500;
        color: #001C41;
        font-size: 18px;
        margin-bottom: 5px;
    }

    p{
        font-family: 'Jost', sans-serif;
        font-size: 16px;
        color: #3E3E3E;
        padding: 3px 0;
    }
`;