import React from 'react';
import {MainCarousel} from '../../Styles/HeroStyle';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

// References for Carousel
// https://www.npmjs.com/package/react-responsive-carousel

function Hero() {
  return (
    <>
        <MainCarousel>
          <Carousel className='carousel'
                    width dynamicHeight={true}
                    autoPlay={true}
                    stopOnHover={false}
                    showArrows={false}
                    showThumbs={false}
                    infiniteLoop={true}
                    fade={true}
                    showStatus={false}
                    transition={3000}
                    swipeable={false}
                    animationHandler='fade'
            >
            <div className='cell'>
              <img src="/images/homecarousel/01 LCBB.jpg" alt='Las Casas Bataan' />
              <div className="legend legend-lc">
                <h2>Las Casas Heritage Collection</h2>
                <p>Las Casas blends the charm and character of the nation’s past with exceptionally welcoming and personalized service in a relaxed beach resort and hotel setting.</p>
              </div>
            </div>

            <div className='cell'>
              <img src="/images/homecarousel/02 LCQC.jpg" alt='Las Casas Quezon City' />
              <div className="legend legend-qc">
                <h2>Heritage Haven in the Heart of Metro</h2>
                <p>An events space, restaurant, and museum that brings the well-loved Las Casas experience from Bataan into the city. It’s the first venture under the Las Casas Heritage Collection by Las Casas Filipinas de Acuzar which first began in Bagac, Bataan.</p>
              </div>
            </div>

            <div className='cell'>
              <img src="/images/homecarousel/03 VS Hotel.jpg" alt='VS Hotel' />
              <div className="legend legend-vs">
                <h2>Hotel and Convention Centre</h2>
                <p>Redefining travel by providing you with unlimited access to fitness classes, gym facilities, and sports facilities. Whether you are staying to work or play, rest and revitalize, our guest rooms bring modern conveniences that elevate your lifestyle.</p>
              </div>
            </div>

            <div className='cell'>
              <img src="/images/homecarousel/04 VSC.jpg" alt='VS Sports' />
              <div className="legend legend-sports">
                <h2>Modern Facilities and Equipment</h2>
                <p>Our space offers you access to a multitude of sports facilities and state-of-the-art fitness equipment to cater to your active lifestyle. Whether you want to spend a night bonding with your family, relax in our water spa pools, play a game of tennis or join studio classes, we’ve got you covered.</p>
              </div>
            </div>

            <div className='cell'>
              <img src="/images/homecarousel/05 LCW.jpg" alt='Las Casas Weddings' />
              <div className="legend legend-wed">
                <h2>Experience Romantic  and Elegant Wedding</h2>
                <p>Las Casas' timeless aura makes it the premier destinations for intimate or grand celebrations.' Say "I do" to the picturesque Las Casas and open new wanders of a lifetime love story leading to the "happily ever after." </p>
              </div>
            </div>

          </Carousel>
        </MainCarousel>

    </>
  )
}

export default Hero