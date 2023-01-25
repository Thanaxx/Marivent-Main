import React from 'react';
import {OffersWrap, OffersBox, OffersElement, OffersImage, OffersDetails, OffersBtn, LearnMoreBtn} from '../../Styles/OffersStyle';

import "react-awesome-lightbox/build/style.css";

function OffersProducts() {

  return (
    <>
    {/**ZOOMING AN IMAGE'
    import Lightbox from 'react-awesome-lightbox';
        const [zoomImg, setZoomImg] = useState(true)

    const openZoom = () => (
        setZoomImg(!zoomImg)
    )

    const closeZoom = () => (
        setZoomImg(false)
    )
*/}

    {/**{zoomImg ? closeZoom : <Lightbox image="/images/offers/01Offer.jpg" title="Image Description" showPrevButton={false} /> } */}

    <OffersWrap data-aos="fade">
        <OffersBox>
            <OffersElement data-aos="fade-right">
                <OffersImage>
                {/**<OffersImage onClick={openZoom}> */}
                
                    <img src="/images/offers/01Offer.jpg" alt='Offer1' />
                    
                </OffersImage>

                <OffersDetails>
                    <p className='title' >Las Casas Bagac, Bataan</p>
                    <h1>WEEKDAY DEAL</h1>
                    <p>01 June 2022 to 31 December 2022 (Mon to Thurs)</p>
                    <p className='line-b'></p>
                    <p><i>Elevate your heritage experience with your loved ones.</i></p>
                    <p>Rates starts at <strong>PHP5,500 nett</strong></p>
                </OffersDetails>

                <OffersBtn>
                    <a href="https://staahmax.staah.net/be/indexpackdetail?propertyId=MzcxNQ==&individual=true">
                        <LearnMoreBtn>
                            LEARN MORE
                        </LearnMoreBtn>
                    </a>
                </OffersBtn>
            </OffersElement>
            
            <OffersElement data-aos="fade-right">
                <OffersImage>
                    <img src="/images/offers/Offer2.jpg" alt='Offer2' />
                </OffersImage>

                <OffersDetails>
                    <p className='title' >Las Casas Bagac, Bataan</p>
                    <h1>WEEKEND DEAL</h1>
                    <p>01 June 2022 to 31 December 2022 (Fri to Sun)</p>
                    <p className='line-b'></p>
                    <p><i>Have an entertaining weekend vacation with your loved ones and enjoy our weekend offer.</i></p>
                    <p>Rates starts at <strong>PHP6,600 nett</strong></p>
                </OffersDetails>

                <OffersBtn>
                    <a href="https://staahmax.staah.net/be/indexpackdetail?propertyId=MzcxNQ==&individual=true">
                        <LearnMoreBtn>
                            LEARN MORE
                        </LearnMoreBtn>
                    </a>
                </OffersBtn>
            </OffersElement>


            {/**
        <OffersElement data-aos="fade-right">
                <OffersImage>
                    <img src="/images/offers/Bella Victoria.jpg" alt='Offer3' />
                </OffersImage>

                <OffersDetails>
                    <p className='title' >VS Hotel</p>
                    <h1>BELLA VICTORIA OFFER</h1>
                    <p>November to December 2022</p>
                    <p className='line-b'></p>
                    <p><i>Be our guest! Book a stay and experience royal treatment.</i></p>
                    <p>For as low as<strong> PHP4,400 nett/night</strong></p>
                </OffersDetails>

                <OffersBtn>
                    <a href="https://vshotel.com.ph/SpecialOffers">
                        <LearnMoreBtn>
                            LEARN MORE
                        </LearnMoreBtn>
                    </a>
                </OffersBtn>
            </OffersElement>
         */}

        </OffersBox>
    </OffersWrap>
    </>
  )
}

export default OffersProducts