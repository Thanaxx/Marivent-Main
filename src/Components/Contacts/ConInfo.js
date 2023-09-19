import React from 'react';
import {ContactWrap, ContactTitle, ContactBataan, ContactImg, ContactListLcbb, ContactListQc, ContactListWed, ContactListVs, ContactListSports, ContactCol} from '../../Styles/ContactInfoStyle';

function ConInfo() {
  return (
    <>
        <ContactWrap>
            <ContactTitle>
                <h1>General Contact Information</h1>
            </ContactTitle>

            {/**BATAAN */}
            <ContactBataan>
                <ContactImg>
                    <img src="/images/logo/Logo LCBB blue.png" alt="" />
                </ContactImg>

                <ContactListLcbb>
                    <ContactCol>
                        <h2>Reservations Team</h2>
                        <p>reservations@lascasasfilipinas.com</p>
                        <p>+63917-872-9361 or +63915-851-9098</p>
                    </ContactCol>

                    <ContactCol>
                        <h2>Weddings Social Events Team</h2>
                        <p>weddings@lascasasfilipinas.com</p>
                        <p>+63917-872-9368</p>
                    </ContactCol>

                    <ContactCol>
                        <h2>Corporate Events</h2>
                        <p>corporatesales@lascasasfilipinas.com</p>
                        <p>+63917-872-9361</p>
                    </ContactCol>

                    <ContactCol>
                        <h2>Government Sales</h2>
                        <p>governmentsale@lascasasfilipinas.com</p>
                        <p>+63-917-803-9476</p>
                    </ContactCol>
                </ContactListLcbb>
            </ContactBataan>

            {/**QUEZON */}
            <ContactBataan>
                <ContactImg>
                    <img src="/images/logo/Logo LCQC blue.png" alt="" />
                </ContactImg>

                <ContactListQc>
                    <ContactCol>
                        <h2>Inquiries and Reservations</h2>
                        <p>contact@lascasasqc.com</p>
                        <p>+63917-136-6796</p>
                    </ContactCol>

                    <ContactCol>
                        <h2>Weddings and Social Events</h2>
                        <p>weddings@lascasasqc.com</p>
                        <p>+63956-346-9582</p>
                    </ContactCol>

                    <ContactCol>
                        <h2>Private Dining</h2>
                        <p>privatedining@lascasasqc.com</p>
                        <p>+63933-822-4522</p>
                    </ContactCol>

                    <ContactCol>
                        <h2>Corporate Events</h2>
                        <p>+63946-154-3043</p>
                    </ContactCol>
                </ContactListQc>
            </ContactBataan>

            {/**WEDDINGS */}
            <ContactBataan>
                <ContactImg>
                    <img src="/images/logo/LCW-blue.png" alt="" />
                </ContactImg>

                <ContactListWed>
                    <ContactCol>
                        <h2>Brgy. Ibaba, Bagac, Bataan 2107, Philippines</h2>
                        <p>weddings@lascasasfilipinas.com</p>
                        <p>+63917-872-9368</p>
                    </ContactCol>

                    <ContactCol>
                        <h2>134 Roosevelt Avenue, San Francisco Del Monte, Metro Manila</h2>
                        <p>weddings@lascasasqc.com</p>
                        <p>+63956-346-9582</p>
                    </ContactCol>

                    <ContactCol>
                        <h2>9th Floor Victoria Sports Tower 2, 799 EDSA 1103, Quezon City</h2>
                        <p>reservations@vshotel.com.ph</p>
                        <p>+63927-370-6269</p>
                    </ContactCol>
                </ContactListWed>
            </ContactBataan>

            {/**VSHOTEL */}
            <ContactBataan>
                <ContactImg>
                    <img src="/images/logo/Logo VS blue.png" alt="" />
                </ContactImg>

                <ContactListVs>
                    <ContactCol>
                        <h2>Corporate, Weddings, & Social Events</h2>
                        <p>events@vshotel.com.ph</p>
                        <p>+63960-604-0808</p>
                    </ContactCol>

                    <ContactCol>
                        <h2>Inquiries and Bookings</h2>
                        <p>reservations@vshotel.ph</p>
                        <p>+63927-370-6269</p>
                    </ContactCol>
                </ContactListVs>
            </ContactBataan>

             {/**SPORTS */}
             <ContactBataan>
             <ContactImg>
                 <img src="/images/logo/vsclub-dark.png" alt="" />
             </ContactImg>

             <ContactListSports>
                 <ContactCol>
                     <h2>Corporate, Weddings, & Social Events</h2>
                     <p>events@vshotel.ph</p>
                     <p>+63960-604-0808</p>
                 </ContactCol>
             </ContactListSports>
         </ContactBataan>

        </ContactWrap>
    </>
  )
}

export default ConInfo