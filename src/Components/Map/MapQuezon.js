import React from 'react';
import {MapWrap, MapBox} from '../../Styles/MapStyle';

function MapQuezon() {
  return (
    <>
    <MapWrap data-aos="zoom-in">
        <MapBox>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.314733069645!2d121.01561131436966!3d14.638067180082887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b77940a4f9df%3A0xf97f0ebe60bd5012!2sLas%20Casas%20Filipinas%20de%20Acuzar%20Quezon%20City!5e0!3m2!1sen!2sph!4v1668585394592!5m2!1sen!2sph" width="100%" height="600" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0" ></iframe>
        </MapBox>
    </MapWrap>
    </>
  )
}

export default MapQuezon