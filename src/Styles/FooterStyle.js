import styled from "styled-components";

export const FooterWrap = styled.div`
    background-color: #001C41;
    color: #fff;
`;

export const FooterBox = styled.div`
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid white;
    padding: 80px 0;
    flex-direction: row;
    flex-wrap: wrap;

    @media screen and (max-width: 800px) {
        flex-direction: column;
        text-align: center;
    }
`;

export const FooterElements= styled.div`
    
`;

export const RightElement= styled.div`
    display: flex;

    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`;

export const HotelLogo = styled.div`
    margin-right: 10px;
    
    img{
        width: 130px;
    }

    
`;

export const Copyright = styled.div`
    /* background-color: rebeccapurple;s */
    text-align: center;
    padding: 20px 0;
    
    p{
        font-size: 14px;
    }

    @media screen and (max-width: 1000px){
        p{
            font-size: 13px;
        }
    }
`;

export const HotelLinks = styled.div`
    p{
        margin-bottom: 10px;
    }

    li{
        list-style-type: none;
        margin: 5px 0;
    }

    a{
        text-decoration: none;
        color: white;
        font-size: 14px;
    }
`;