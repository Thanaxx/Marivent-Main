import React from 'react'
import {MapWrap, MapBox} from '../../Styles/MapStyle';

function MapBataan() {
  return (
    <>
        <MapWrap data-aos="zoom-in">
          <MapBox>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.937486223646!2d120.38307561436913!3d14.602636980942743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396119db4432279%3A0x3f7f6a26d0450dd2!2sLas%20Casas%20Filipinas%20De%20Acuzar!5e0!3m2!1sen!2sph!4v1668583307363!5m2!1sen!2sph" width="100%" height="600" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0" ></iframe>
          </MapBox>
        </MapWrap>
    
    </>
  )
}

export default MapBataan