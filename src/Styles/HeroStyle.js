import styled from "styled-components";

export const MainCarousel = styled.div`

    .carousel{
        height: 100%;
        width: 100%;

    }

    .cell{
        /* background-color: red; */
        width: 100%;
        height: 90vh;

        @media screen and (max-width: 1000px){
            height: 350px;
        }
    }

    .cell img{
        height: 90vh;
        width: 100%;

        @media screen and (max-width: 1000px){
            height: 350px;
        }
    }

    .cell .legend{
        text-align: right;
        background-color: transparent;
        font-size: 20px;
        margin-bottom: -10px
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

// <MainCarousel data-aos="fade">
// <div class="carousel" data-flickity='{ "wrapAround": true, "autoPlay": true, "imagesLoaded": true, "percentPosition": false, "prevNextButtons": false, "pageDots": false, "reloadUpdate": true} '>
//   <div class="carousel-cell">
//     <img src="/images/homecarousel/01 LCBB.jpg" alt='Las Casas Bataan' />
//   </div>
//   <div class="carousel-cell">
//     <img src="/images/homecarousel/02 LCQC.jpg" alt='Las Caasas Quezon City' />
//   </div>
//   <div class="carousel-cell">
//     <img src="/images/homecarousel/03 VS Hotel.jpg" alt='VS Hotel' />
//   </div>
// </div>
// </MainCarousel>

// .carousel {
//     /* background: #EEE; */
//     height: 100%;
//     width: 100%;
// }

// .carousel-cell {
//     width: 100%;
//     height: 600px;
//     /* margin-right: 10px; */
//     /* background: #8C8; */
//     /* border-radius: 5px; */
//     counter-increment: gallery-cell;

//     @media screen and (max-width: 1000px){
//         height: 350px;
//     }
// }

//     /* cell number */
// .carousel-cell img {
//     height: 600px;
//     width: 100%;
//     display: block;

//     @media screen and (max-width: 1000px){
//         height: 350px;
//     }
    
// }