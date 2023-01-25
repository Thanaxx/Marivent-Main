import React from 'react';
import {MapWrap, MapBox} from '../../Styles/MapStyle';

function MapVs() {
  return (
    <>
        <MapWrap data-aos="zoom-in">
            <MapBox>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.3531760342803!2d121.04040911436951!3d14.635882480135903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b7f1ab4c5b6d%3A0x73adf23e0eb00084!2sVS%20Hotel!5e0!3m2!1sen!2sph!4v1668623411778!5m2!1sen!2sph" width="100%" height="600" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0" ></iframe>
            </MapBox>
        </MapWrap>
    </>
  )
}

export default MapVs