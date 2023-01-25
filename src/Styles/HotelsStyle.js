import styled from "styled-components";

export const HotelsWrap = styled.div`
    /* background-color: grey; */
    padding: 80px 50px;

    @media screen and (max-width: 1000px){
        flex-direction: column-reverse;
        padding: 50px 30px;
    }
`;

export const HotelBox = styled.div`
`;

export const HotelElements = styled.div`
    display: flex;
    margin: 50px 0;
    flex-direction: row;
    flex-wrap: wrap;

    @media screen and (max-width: 1000px){
        flex-direction: column-reverse;
        margin: 50px 0;
    }
    
`;

export const ElementA = styled.div`
    /* background-color: red; */
    flex: 1;
    margin: auto;
    text-align: justify;
    padding: 0 50px;

    h1{
        font-size: 36px;
        margin-bottom: 10px;
        color: #001C41;


        @media screen and (max-width: 1000px){
            font-size: 30px;
        }
    }

    p{
        font-size: 20px;

        @media screen and (max-width: 1000px){
            font-size: 18px;
        }
    }

    @media screen and (max-width: 1000px){
        padding: 20px 0;
    }
    
`;

export const ElementB = styled.div`
    flex: 1;
    background-color: green;
    margin: 0 50px;

    @media screen and (max-width: 1000px){
        margin: 0px;
    }

    .carousel {
        background: #EEE;
        height: 100%;
        width: 100%;
    }

    .carousel-cell {
        width: 100%;
        max-height: auto;
        /* margin-right: 10px; */
        /* background: #8C8; */
        /* border-radius: 5px; */
        counter-increment: gallery-cell;
    }

        /* cell number */
    .carousel-cell img {
        height: 400px;
        width: 100%;
        display: block;

        @media screen and (max-width: 1000px){
            height: 350px;
        }
    }
`;

export const LearnMore = styled.button`
    padding: 12px 22px;
    margin-top: 20px;
    background-color: #C39122;
    border: none;
    outline: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    transition: 0.3s;

    :hover{
        background-color: #81631C;
        
    }
`;

// .carousel{
//     background-color: greenyellow;
//     max-height: 100%;
// }

// .carousel-cell {
//     width: 100%;
//     max-height: 100%;
//     counter-increment: gallery-cell;
// }

// .carousel-cell img{
//     width: 100%;
//     max-height: 100%;
// }