import styled from "styled-components";

export const ContactWrap = styled.div`
    /* background-color: grey; */
    padding: 80px 50px;

    @media screen and (max-width: 1000px) {
        padding: 50px 50px;
    }
`;

export const ContactBox = styled.div`
    /* background-color: green; */
    display: flex;
    justify-content: space-around;
    text-align: left;
    flex-direction: row;
    flex-wrap: wrap;

    @media screen and (max-width: 1000px) {
        text-align: center;
    }
`;

export const ContactElement = styled.div`
    /* background-color: hotpink; */
    flex: 33.33%;
    margin: auto;
    text-align: center;

    @media screen and (max-width: 1000px) {
        margin-bottom: 35px;
    }
`;

export const ContactLogo = styled.div`
    img{
        width: 250px;
    }
`;

export const ContactDetails = styled.div`
    color: #001C41;

    li{
        list-style-type: none;
        text-decoration: none;
        padding: 3px 0;
        font-size: 16px;

        @media screen and (max-width: 1025px) {
            font-size: 13px;
        }
    }
`;

export const ContactSocials = styled.div`
    margin-top: 15px;

    img{
        width: 30px;
        margin-right: 10px;
    }
`;