import React from 'react';
import {SpecialOffersWrap, Sptitle, SpBody, SpCard} from '../../Styles/OffersStyle';
import SpecialOffers from '../../data/specialoffers';

function OffersProducts() {

  return (
    <>
        <SpecialOffersWrap>
            <Sptitle>
                <h1>Highlight Offers</h1>
            </Sptitle>

            <SpBody>
                {SpecialOffers.map((items, index) => (
                    <SpCard>
                        <img src={items.image} alt="" />
                        <p>{items.property}</p>
                        <p>{items.booking}</p>
                        <h1>{items.title}</h1>
                        <p className='rate'>{items.rate}</p>
                        <p>{items.desc}</p>
                        <a href={items.url} ><button>LEARN MORE</button></a>
                    </SpCard>
                ))}
            </SpBody>
        </SpecialOffersWrap>
    </>
  )
}

export default OffersProducts