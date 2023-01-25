import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import {MainCarousel} from '../../Styles/HeroStyle';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function QuezonHero() {
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
                    <img src="/images/qc/qccarousel/LCQC 01.jpg" alt='Las Casas QC Slider1' />
                </div>
                
                <div className='cell'>
                    <img src="/images/qc/qccarousel/LCQC 02.jpg" alt='cLas Casas QC Slider2' />
                </div>
            
                <div className='cell'>
                    <img src="images/qc/qccarousel/LCQC 03.jpg" alt='Las Casas QC Slider3' />
                </div>

                <div className='cell'>
                    <img src="/images/qc/qccarousel/LCQC 04.jpg" alt='Las Casas QC Slider4' />
                </div>

                <div className='cell'>
                    <img src="/images/qc/qccarousel/LCQC 05.jpg" alt='Las Casas QC Slider5' />
                </div>
            </Carousel>
        </MainCarousel>
    </>
  )
}

export default QuezonHero