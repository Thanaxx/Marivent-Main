import React from 'react';
import {FooterWrap, FooterBox, FooterElements, HotelLogo, Copyright, HotelLinks, RightElement} from '../../Styles/FooterStyle';

function Footer() {
  return (
    <>
      <FooterWrap>
        <FooterBox>
          <FooterElements>
            <RightElement>
              <HotelLogo>
                <img src="/images/logo/Logo Marivent 2 white.png" alt='Marivent Logo' />
              </HotelLogo>

              <HotelLinks>
                <p><i>more from</i> Marivent</p>
                <ul>
                  <li><a href='https://lascasasfilipinas.com/' >Las Casas Filipinas de Acuzar Bagac, Bataan</a></li>
                  <li><a href='https://www.lascasasqc.com/' >Las Casas Quezon City</a></li>
                  <li><a href='https://vshotel.com.ph/' >Victoria Sports CLUB</a></li>
                  <li><a href='/https://victoriaskin.ph/' >Victoria Skin</a></li>
                  <li><a href='/https://www.nsjbi.com.ph/' >New San Jose Builders, Inc</a></li>
                </ul>
              </HotelLinks>
            </RightElement>
            
          </FooterElements>

          <FooterElements>
            <HotelLinks>
              <ul>
                <li><a href='/' >Home</a></li>
                <li><a href='/offers' >Offers</a></li>
                <li><a href='/contact' >Contact Us</a></li>
              </ul>
            </HotelLinks>
          </FooterElements>
        </FooterBox>

        <Copyright>
          <p>Copyright © 2022 Marivent Hotels. All Rights Reserved</p>
        </Copyright>
      </FooterWrap>
    </>
  )
}

export default Footer