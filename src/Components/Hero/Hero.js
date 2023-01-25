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
                    transition={1500}
                    swipeable={false}
                    animationHandler='fade'
            >
            <div className='cell'>
              <img src="/images/homecarousel/01 LCBB.jpg" alt='Las Casas Bataan' />
              <p className="legend">Las Casas Bagac, Bataan</p>
            </div>
            
            <div className='cell'>
              <img src="/images/homecarousel/02 LCQC.jpg" alt='Las Caasas Quezon City' />
              <p className="legend">Las Casas Quezon City</p>
            </div>
          
            <div className='cell'>
              <img src="/images/homecarousel/03 VS Hotel.jpg" alt='VS Hotel' />
              <p className="legend">VS Hotel</p>
            </div>
          </Carousel>
        </MainCarousel>

    </>
  )
}

export default Hero