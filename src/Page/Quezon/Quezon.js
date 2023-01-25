import React from 'react';
import QuezonHero from '../../Components/Hero/QuezonHero';
import MapQuezon from '../../Components/Map/MapQuezon';
import TaglineQc from '../../Components/Tagline/TaglineQc';
import QcInfo from '../../Components/Info/QcInfo';

function Quezon() {
  return (
    <>
        <QuezonHero/>
        <QcInfo/>
        <MapQuezon/>
        <TaglineQc/>

    </>
  )
}

export default Quezon