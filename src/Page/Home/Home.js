import React from 'react';
import Hero from '../../Components/Hero/Hero';
import Intro from '../../Components/Intro/Intro';
import Hotels from '../../Components/Hotels/Hotels';
import Tagline from '../../Components/Tagline/Tagline';

function Home() {
  return (
    <>
        <Hero/>
        <Intro/>
        <Hotels/>
    </>
  )
}

export default Home