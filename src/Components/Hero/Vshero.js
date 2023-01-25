import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import {MainCarousel} from '../../Styles/HeroStyle';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Vshero() {
  return (
    <>
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
                    <img src="/images/vshotel/carousel/01 VS.jpg" alt='VS Hotel Slider1' />
                </div>
                
                <div className='cell'>
                    <img src="/images/vshotel/carousel/02 VS.jpg" alt='VS Hotel Slider2' />
                </div>
            
                <div className='cell'>
                    <img src="/images/vshotel/carousel/03 VS.jpg" alt='VS Hotel Slider3' />
                </div>

                <div className='cell'>
                    <img src="/images/vshotel/carousel/04 VS.jpg" alt='VS Hotel Slider4' />
                </div>

                <div className='cell'>
                    <img src="/images/vshotel/carousel/05 VS.jpg" alt='VS Hotel Slider5' />
                </div>
            </Carousel>

        </MainCarousel>
    </>
  )
}

export default Vshero