import React from 'react';
import {FooterWrap, FooterContainer, FooterSocial} from '../../Styles/FooterStyle';
import {GrInstagram} from 'react-icons/gr';
import {FaFacebook} from 'react-icons/fa';

function Footer() {
  return (
    <>
      <FooterWrap>
        <FooterContainer>
          <img src="/images/logo/marivent-main.png" alt="" />
          <p>Victoria Sports Tower 2, 799 EDSA South Triangle Quezon City</p>
        </FooterContainer>
        <FooterSocial>
          <a href="https://www.instagram.com/mariventhospitality/"><p><GrInstagram/></p></a>
          <a href="https://www.facebook.com/mariventhotelsresorts"><p><FaFacebook/></p></a>
        </FooterSocial>
      </FooterWrap>
    </>
  )
}

export default Footer