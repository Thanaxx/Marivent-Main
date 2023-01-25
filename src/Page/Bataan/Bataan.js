import React from 'react';
import BataanHero from '../../Components/Hero/BataanHero';
import BataanInfo from '../../Components/Info/BataanInfo';
import MapBataan from '../../Components/Map/MapBataan';
import BataanTagline from '../../Components/Tagline/BataanTagline';

function Bataan() {
  return (
    <>
      <BataanHero/>
      <BataanInfo/>
      <MapBataan/>
      <BataanTagline/>
    </>
  )
}

export default Bataan