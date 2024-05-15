import React, {useState, useEffect} from 'react';
import {NavLogo,NavMenu,NavLink,NavBurgerMenu, NavStick, NavLogoB} from '../../Styles/NavStyle'
import {FiMenu} from 'react-icons/fi'
import {IoMdClose} from 'react-icons/io';

function Nav() {

  const [menuClick, setMenuClick] = useState(false)
  const [sticky, setSticky] = useState(false)

  const OpenMenu = () => setMenuClick(!menuClick)
  const CloseMenu = () => setMenuClick(false)

  // stick nav bar top

  useEffect(()=> {
    const handleScroll = () => {
      setSticky(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });


  return (
    <>
        <NavLogo>
          <img src="/images/logo/Mari.png" alt='Marivent Logo' />
        </NavLogo>

        <NavStick className={`${sticky ? "sticky" : ""}`}>

        <NavLogoB>
          <img src="/images/logo/Logo Marivent 1 white.png" alt='Marivent Logo' />
        </NavLogoB>

          <NavBurgerMenu onClick={OpenMenu} >
            {menuClick ? <IoMdClose/> : <FiMenu/> }
          </NavBurgerMenu>

          <NavMenu>
            <ul className={ menuClick ? 'navOpen' : 'navClose'} >
              <li>
                <NavLink to="/" onClick={CloseMenu}>
                  HOME
                </NavLink>
              </li>

              <li>
                <NavLink to="/lascasasbataan" onClick={CloseMenu}>
                  LAS CASAS BATAAN
                </NavLink>
              </li>

              <li>
                <NavLink to="/lascasasqc" onClick={CloseMenu}>
                  LAS CASAS QUEZON CITY
                </NavLink>
              </li>

              <li>
                <NavLink to="/lascasasweddings" onClick={CloseMenu}>
                  LAS CASAS WEDDINGS
                </NavLink>
              </li>

              <li>
                <NavLink to="/vshotel" onClick={CloseMenu}>
                  VS HOTEL
                </NavLink>
              </li>

              <li>
                <NavLink to="/vsclub" onClick={CloseMenu}>
                  VICTORIA SPORTS CLUB
                </NavLink>
              </li>

              {/* <li>
                <NavLink to="/offers" onClick={CloseMenu}>
                  SPECIAL OFFERS
                </NavLink>
              </li> */}

              <li>
                <NavLink to="/contact" onClick={CloseMenu}>
                  CONTACT US
                </NavLink>
              </li>

            </ul>
          </NavMenu>
        </NavStick>
    </>
  )
}

export default Nav