import React from 'react';
import {BataanWrap, BtContainer, BataanLogo, BataanText} from '../../Styles/BataanInfoStyle'

function VsInfo() {
  return (
    <>
        <BataanWrap>
            <BtContainer>
                <BataanLogo data-aos="fade-right">
                    <img src='/images/logo/Logo VS brown.png' alt='VS Hotel logo' />
                </BataanLogo>

                <BataanText data-aos="fade-right">
                    <p>
                        A hotel dedicated to sports, fitness, and wellness. VS Hotel aims to be a space 
                        where travelers can relax into the comfort of our well-designed rooms, explore the 
                        city, whilst not having to compromise their healthy and active lifestyle. Our 
                        state-of-the-art sports, fitness, and wellness facilities gives one access to 
                        unlimited activities and services to choose from. 
                    </p>
                    
                </BataanText>
            </BtContainer>
        </BataanWrap>
    </>
  )
}

export default VsInfo