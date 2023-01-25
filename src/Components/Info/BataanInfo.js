import React from 'react';
import {BataanWrap, BtContainer, BataanLogo, BataanText} from '../../Styles/BataanInfoStyle'

function BataanInfo() {
  return (
    <>
        <BataanWrap>
            <BtContainer>
                <BataanLogo data-aos="fade-right">
                    <img src='/images/logo/Logo LCBB brown.png' alt='Lascasas Bataan logo' />
                </BataanLogo>

                <BataanText data-aos="fade-right">
                    <p>
                        Las Casas Filipinas de Acuzar in Bataan is a beach resort, convention 
                        center, and heritage destination rolled into one. With its many facets, 
                        it is truly a unique destination with much to offer for every traveler.
                    </p>
                    <br/>

                    <p>
                        Home to Jose Acuzar’s collection of heritage houses that have been salvaged 
                        from total ruin and neglect, these houses were then renovated and rebuilt by 
                        a team of artisans and craftsmen in the town of Bagac, Bataan. Las Casas 
                        features the finest of Filipino craftsmanship, artistry, and skill giving 
                        the property a look and feel that is distinctive and its own.
                    </p>
                    <br/>

                    <p>
                        Las Casas blends the charm and character of the nation’s past with exceptionally 
                        welcoming and personalized service in a relaxed beach resort and hotel setting.
                    </p>
                </BataanText>
            </BtContainer>
        </BataanWrap>
    </>
  )
}

export default BataanInfo