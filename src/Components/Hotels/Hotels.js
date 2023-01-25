import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import {HotelsWrap, HotelBox, HotelElements, ElementA, ElementB, LearnMore} from '../../Styles/HotelsStyle';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Hotels() {
  return (
    <>
        <HotelsWrap data-aos="fade">
          <HotelBox>
            <HotelElements>
              <ElementA data-aos="fade-right">
                <h1>LAS CASAS BAGAC BATAAN</h1>
                <p>
                  Las Casas Filipinas de Acuzar in Bagac, Bataan is a beach resort, convention 
                  center and heritage destination rolled into one. Home to Jose Acuzar’s collection 
                  of Spanish-Filipino Houses that have been renovated and rebuilt by a team of artisans 
                  and craftsmen in the town of Bagac, Bataan, Las Casas features the finest of Filipino 
                  craftsmanship, artistry, and skill giving the property a look and feel that is 
                  distinctive and its own.
                </p>

                <a href="https://lascasasfilipinas.com/" >
                  <LearnMore>
                    LEARN MORE
                  </LearnMore>
                </a>

              </ElementA>

              <ElementB>
                <Carousel className='carousel' autoPlay={true} stopOnHover={false} showArrows={false} showThumbs={false} infiniteLoop={true} fade={true} showStatus={false} >
                  <div className='carousel-cell'>
                    <img src="/images/bataan/Las Casas 01.jpg" alt='Las Casas Bataan Img' />
                  </div>
                  
                  <div className='carousel-cell'>
                    <img src="/images/bataan/Las Casas Bataan 1.jpg" alt='Las Casas Bataan Img' />
                  </div>
                </Carousel>
              </ElementB>
            </HotelElements>

            <HotelElements data-aos="fade-right">

              <ElementB>
                <Carousel className='carousel' autoPlay={true} stopOnHover={false} showArrows={false} showThumbs={false} infiniteLoop={true} fade={true} showStatus={false} >
                  <div className='carousel-cell'>
                    <img src="/images/qc/LCQC 01.jpg" alt='Las Casas Quezon City Img' />
                  </div>
                  
                  <div className='carousel-cell'>
                    <img src="/images/qc/LCQC 02.jpg" alt='Las Casas Quezon City Img' />
                  </div>
                </Carousel>
              </ElementB>

              <ElementA>
                <h1>LAS CASAS QUEZON CITY</h1>
                <p>
                  Situated at the heart of Quezon City, on Roosevelt Avenue, Las Casas in Quezon City is a 
                  Dining and Events Space that offers unique experiences for guests with its intricately-designed 
                  spaces, delicious array of dining options to choose from, and exceptionally welcoming service.
                </p>

                <a href="https://www.lascasasqc.com/" >
                  <LearnMore>
                    LEARN MORE
                  </LearnMore>
                </a>

              </ElementA>
            </HotelElements>

            <HotelElements data-aos="fade-right">
              <ElementA>
                <h1>VS HOTEL</h1>
                <p>
                  A hotel dedicated to sports, fitness, and wellness. VS Hotel aims to be a space where 
                  travelers can relax into the comfort of our well-designed rooms, explore the city, whilst 
                  not having to compromise their healthy and active lifestyle. Our state-of-the-art sports, 
                  fitness, and wellness facilities gives one access to unlimited activities and services to 
                  choose from.
                </p>

                <a href="https://vshotel.com.ph/" >
                  <LearnMore>
                    LEARN MORE
                  </LearnMore>
                </a>

              </ElementA>

              <ElementB>
                  <Carousel className='carousel' autoPlay={true} stopOnHover={false} showArrows={false} showThumbs={false} infiniteLoop={true} fade={true} showStatus={false} >
                    <div className='carousel-cell'>
                      <img src="/images/vshotel/03 VS Hotel.jpg" alt='VS Hotel Img' />
                    </div>
                    
                    <div className='carousel-cell'>
                      <img src="/images/vshotel/Ballroom.jpg" alt='VS Hotel Img' />
                    </div>
                  </Carousel>
              </ElementB>
              
            </HotelElements>
          </HotelBox>
        </HotelsWrap>
    </>
  )
}

export default Hotels