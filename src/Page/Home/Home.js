import React from 'react';
import Hero from '../../Components/Hero/Hero';
import Intro from '../../Components/Intro/Intro';
import Hotels from '../../Components/Hotels/Hotels';
import HighlightOffers from '../../Components/Highlight/Offers';

function Home() {
  return (
    <>
        <Hero/>
        <Intro/>
        <Hotels/>
        <HighlightOffers />
    </>
  )
}

export default Home