import React from 'react';
import {ContactWrap, ContactBox, ContactElement, ContactLogo, ContactDetails, ContactSocials} from '../../Styles/ContactInfoStyle';

function ConInfo() {
  return (
    <>
        <ContactWrap data-aos="fade-right">
            <ContactBox>

                <ContactElement>
                    <ContactLogo>
                        <img src="/images/logo/Logo LCBB blue.png" alt='lcbb'/>
                    </ContactLogo>

                    <ContactDetails>
                        <ul>
                            <li>Brgy. Ibaba, Bagac, Bataan 2107, Philippines  </li>
                            <li>+63 969 102 2562 or +63 927 370 6269 </li>
                            <li> reservations@lascasasfilipinas.com </li>
                        </ul>                    
                    </ContactDetails>

                    <ContactSocials>
                        <a href='https://www.facebook.com/LasCasasBataan'><img src="/images/logo/Facebook.png" alt='Facebook logo' /></a>
                        <a href='https://www.instagram.com/lascasasfilipinasdeacuzar/'><img src="/images/logo/Insta.png" alt='Instagram logo' /></a>
                    </ContactSocials>
                </ContactElement>

                <ContactElement>
                    <ContactLogo>
                        <img src="/images/logo/Logo LCQC blue.png" alt='lcbb'/>
                    </ContactLogo>

                    <ContactDetails>
                        <ul>
                            <li>134 Roosevelt Avenue, San Francisco Del Monte,
                            <br/> Metro Manila, Philippines</li>
                            <li>+63 917 136 6796</li>
                            <li>contact@lascasasqc.com</li>
                        </ul>                    
                    </ContactDetails>

                    <ContactSocials>
                        <a href='https://www.facebook.com/LasCasasQC/'><img src="/images/logo/Facebook.png" alt='Facebook logo' /></a>
                        <a href='https://www.instagram.com/lascasasqc/'><img src="/images/logo/Insta.png" alt='Instagram logo' /></a>
                    </ContactSocials>
                </ContactElement>

                <ContactElement>
                    <ContactLogo>
                        <img src="/images/logo/Logo VS blue.png" alt='lcbb'/>
                    </ContactLogo>

                    <ContactDetails>
                        <ul>
                            <li>9th Floor Victoria Sports Tower 2, 799 EDSA 1103, 
                            <br/> Quezon City, Philippines</li>
                            <li>+63 927 370 6269</li>
                            <li>reservations@vshotel.com.ph </li>
                        </ul>                    
                    </ContactDetails>

                    <ContactSocials>
                        <a href='https://www.facebook.com/vshotelph/'><img src="/images/logo/Facebook.png" alt='Facebook logo' /></a>
                        <a href='https://www.instagram.com/vshotelph/'><img src="/images/logo/Insta.png" alt='Instagram logo' /></a>
                    </ContactSocials>
                </ContactElement>



            </ContactBox>
        </ContactWrap>
    </>
  )
}

export default ConInfo