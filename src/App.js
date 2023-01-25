import React from 'react';
import {BrowserRouter, Routes , Route} from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Home from './Page/Home/Home';
import Footer from './Components/Footer/Footer';
import Bataan from './Page/Bataan/Bataan';
import Quezon from './Page/Quezon/Quezon';
import Vshotel from './Page/Vshotel/Vshotel';
import Offers from './Page/Offers/Offers';
import Contact from './Page/Contacts/Contact';
import Top from './Components/BackToTop/Top';
import ScrollToTop from './Components/ScrollToTop';

// npm install react-awesome-lighbox - for zooming in images

function App() {

  return (
    <>
      <BrowserRouter forceRefresh={true}>
      <ScrollToTop />
      <Nav/>
        <Routes >
          <Route path="/" element={<Home/>} />
          <Route path="/lascasasbataan" element={<Bataan/>} />
          <Route path="/lascasasqc" element={<Quezon/>} />
          <Route path="/vshotel" element={<Vshotel/>} />
          <Route path="/offers" element={<Offers/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Top/>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;


