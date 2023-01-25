import React from 'react';
import {BataanWrap, BtContainer, BataanLogo, BataanText} from '../../Styles/BataanInfoStyle'

function QcInfo() {
  return (
    <>
        <BataanWrap>
            <BtContainer>
                <BataanLogo data-aos="fade-right">
                    <img src='/images/logo/Logo LCQC brown.png' alt='Lascasas Bataan logo' />
                </BataanLogo>

                <BataanText data-aos="fade-right">
                    <p>
                        Situated at the heart of Quezon City, on Roosevelt Avenue, Las Casas in Quezon 
                        City is a Dining and Events Space that offers unique experiences for guests with 
                        its intricately-designed spaces, delicious array of dining options to choose from, 
                        and exceptionally welcoming service. 
                    </p>
                    <br/>

                    <p>
                        Las Casas in Quezon City is a member of the 
                        Las Casas Heritage Collection. A line of heritage resorts and hotels in the 
                        Philippines celebrating Filipino artistry, craftsmanship, service and talent. 
                        Guided by its Las Casas Spirit philosophy, each property offers a unique experience 
                        and warmth of service that leaves long-lasting impressions to keep guests coming 
                        back for more.
                    </p>
                </BataanText>
            </BtContainer>
        </BataanWrap>
    </>
  )
}

export default QcInfo