import React from 'react'
import {IntroWrap, IntroText, MariventLogo} from '../../Styles/IntroStyle';

function Intro() {
  return (
    <>
        <IntroWrap>
          <MariventLogo>
            <img src="/images/logo/MRLogo.png" alt="MariventLogo" />
          </MariventLogo>
          <IntroText>
            <h1>
              Showcasing the best of Filipino service, heritage and craftmanship.
            </h1>
            <h3>
                A hospitality group featuring heritage resorts and
                hotels in the Philippines that celebrate Filipino artistry,
                craftsmanship, service and talent. Each property offers a
                unique experience and warmth of service that leaves long-lasting
                impressions to keep guests coming back for more.
            </h3>
          </IntroText>
         {/**
           <OffersBtn>
            <button>SEE OFFERS</button>
          </OffersBtn>
        */}
        </IntroWrap>

    </>
  )
}

export default Intro