import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import {MainCarousel} from '../../Styles/HeroStyle';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function BataanHero() {
  return (
    <MainCarousel data-aos="fade">
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
              <img src="/images/bataan/btcarousel/01 LCBB.jpg" alt='Las Casas Bataan Slider1' />
            </div>
            
            <div className='cell'>
              <img src="/images/bataan/btcarousel/02 LCBB.jpg" alt='Las Casas Bataan Slider2' />
            </div>
          
            <div className='cell'>
              <img src="/images/bataan/btcarousel/03 LCBB.jpg" alt='Las Casas Bataan Slider3' />
            </div>

            <div className='cell'>
              <img src="/images/bataan/btcarousel/04 LCBB.jpg" alt='Las Casas Bataan Slider4' />
            </div>

            <div className='cell'>
              <img src="/images/bataan/btcarousel/05 LCBB.jpg" alt='Las Casas Bataan Slider5' />
            </div>
          </Carousel>
    </MainCarousel>
  )
}

export default BataanHero