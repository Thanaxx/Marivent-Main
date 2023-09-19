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
        object-fit: cover;

        @media screen and (max-width: 1000px){
            height: 350px;
        }
    }

    /* .cell .legend{
        text-align: right;
        background-color: transparent;
        font-size: 20px;
        margin-bottom: -10px
    } */

    .cell .legend{
        text-align: left;
        background-color: rgba(0, 0, 0, 0.53);
        font-size: 20px;
        margin-bottom: 30px;
        width: 400px;
        border-radius: 3px;
        padding: 40px 20px;

        h2{
            font-family: 'Playfair Display', serif;
            font-weight: 400;
            font-size: 40px;
            margin-bottom: 10px;

            @media screen and (max-width: 1366px){
                font-size: 30px;
            }
        }

        p{
            font-family: 'Jost', sans-serif;
            margin-bottom: 25px;
            font-weight: 300;
            font-size: 16px;
        }

        button{
            padding: 10px 30px;
            border: 1px solid #ffffff;
            background-color: transparent;
            color: #ffffff;
            border-radius: 4px;
        }
    }

    .cell .legend-lc{
        background-color: #4E270A;
    }

    .cell .legend-qc{
        background-color: #C55A11;
    }

    .cell .legend-vs{
        background-color: #02230B;
    }

    .cell .legend-sports{
        background-color: #1B552F;
    }

    .cell .legend-wed{
        background-color: #AF864C;
    }

    @media screen and (max-width: 768px) {
        .cell .legend-lc{
            display: none;
        }

        .cell .legend-qc{
            display: none;
        }

        .cell .legend-vs{
            display: none;
        }

        .cell .legend-sports{
            display: none;
        }

        .cell .legend-wed{
            display: none;
        }
    }

    .carousel .slide .legend{
        opacity: 1;
    }

`;