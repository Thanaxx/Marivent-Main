import styled from "styled-components";
import {Link} from "react-router-dom"

export const NavLogo = styled.div`
    text-align: center;
    padding-top: 15px;
    background-color: #001C41;
    /* background-color: green; */
    /* margin: 0; */

    img{
        width: 200px;
        height: 35px;
        /* background-color: yellow; */
    }

    @media screen and (max-width: 1000px){
        display: none;
    }
`;

export const NavStick = styled.div` 
    position: sticky;
    top: 0;
    z-index: 999;
    background-color: #001C41;
    font-family: 'Jost', sans-serif;
    padding: 20px 0;
    /* background-color: red; */
    transition: 0.3s ease-out;

    @media screen and (max-width: 1000px){
        padding: 35px 0;
    }
`;

export const NavMenu = styled.div`
    /* background-color: rosybrown; */
    padding: 0px 300px 0 300px;

    @media screen and (max-width: 1366px){
        padding: 0px 120px 0 120px;
    }

    ul{
        align-items: 'center';
        justify-content: space-around;
        display: flex;
    }

    li{
        list-style-type: none;

        @media screen and (max-width: 1000px){
            margin: 10px 0;
        }
    }

    /* Navmenu hide for mobile UI */
    @media screen and (max-width: 1000px){
        .navOpen{
            background-color: #001C41;
            height: 100vh;
            width: 100%;
            position: fixed;
            top: 61px;
            left: 0;
            display: block;
            z-index: 1;
            opacity: 1;
            transition: 0.5s;
            padding: 20px 0;
        }

        .navClose{
            width: 100%;
            height: 100vh;
            position: absolute;
            top: 100px;
            left: -150%;
            opacity: 1;
            transition: all 0.5s ease;
            display: block;
        }
    }

`;

export const NavLogoB = styled.div`
    display: none;

    @media screen and (max-width: 1000px){
        display: block;
        text-align: left;
        margin-left: 10px;
        position: fixed;
        top: 14px;
        left: 10px;

        img{
            width: 160px;
            /* background-color: red; */
        }
    }
`;


export const NavLink = styled(Link)`
        text-decoration: none;
        color: #fff;
        font-size: 12px;

        @media screen and (max-width: 1000px){
            font-size: 15px;
            display: table;
            width: 100%;
            text-align: left;
            padding: 20px 20px;

            :hover{
                color: #001C41;
                background-color: #fff;
                transition: 0.3s ease-out;
            }
        }
`;

export const NavBurgerMenu = styled.div`
        position: absolute;
        right: 18px;
        top: 20px;
        font-size: 30px;
        color: #fff;
        cursor: pointer;
        display: none;
        transition: 0.3s;

        @media screen and (max-width: 1000px){
            display: block;
        }
`;