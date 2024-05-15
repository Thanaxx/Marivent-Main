import React from 'react';
import {PropertyMain, Btitle, Bcover, Blogo, Bdesc, Bbuttons, BListOffersB, ListOffers} from '../../Styles/PropertyStyle';
// import BataanOffers from '../../data/vshotel';

function Vshero() {
  return (
    <>
        <PropertyMain>
            <Btitle>
                <h1>Hotel</h1>
            </Btitle>

            <Bcover>
                <img src="/images/vshotel/carousel/01 VS.jpg" alt="" />
            </Bcover>

            <Blogo>
                <img src="/images/logo/Logo VS blue.png" alt="" />
            </Blogo>

            <Bdesc>
                <p>
                    A hotel dedicated to sports, fitness, and wellness. VS Hotel aims to
                    be a space where travelers can relax into the comfort of our well-designed
                    rooms, explore the city, whilst not having to compromise their healthy and
                    active lifestyle. Our state-of-the-art sports, fitness, and wellness facilities
                    gives one access to unlimited activities and services to choose from.
                </p>

            <Bbuttons>
                <a href="https://staahmax.staah.net/be/indexpackdetail?propertyId=MzgzMA==&individual=true"><button>INQUIRE NOW</button></a>
                <a href="https://vshotel.com.ph/SpecialOffers"><button>SEE OFFERS</button></a>
            </Bbuttons>
            </Bdesc>

            {/**list of offers */}

            {/* <BListOffersB>
            {BataanOffers.map((items, index) => (
                <>
                <ListOffers>
                    <img src={items.image} alt="" />
                    <h1>{items.name}</h1>
                    <p>{items.desc}</p>
                    <a href={items.url}><button>INQUIRE NOW</button></a>
                </ListOffers>
                </>
            ))}
            </BListOffersB> */}

        </PropertyMain>
    </>
  )
}

export default Vshero