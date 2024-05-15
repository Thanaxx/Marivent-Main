import React from 'react';
import {PropertyMain, Btitle, Bcover, Blogo, Bdesc, Bbuttons, BListOffers, ListOffers} from '../../Styles/PropertyStyle';
// import BataanOffers from '../../data/bataan';

function BataanHero() {
  return (
    <>
      <PropertyMain>
        <Btitle>
          <h1>Heritage Collections</h1>
        </Btitle>

        <Bcover>
          <img src="/images/bataan/btcarousel/01 LCBB.jpg" alt="" />
        </Bcover>

        <Blogo>
          <img src="/images/logo/Logo LCBB blue.png" alt="" />
        </Blogo>

        <Bdesc>
          <p>
            Las Casas Filipinas de Acuzar in Bataan is a beach resort, convention
            center, and heritage destination rolled into one. With its many facets,
            it is truly a unique destination with much to offer for every traveler.
          </p>
        <br/>

          <p>
              Home to Jose Acuzar’s collection of heritage houses that have been salvaged
              from total ruin and neglect, these houses were then renovated and rebuilt by
              a team of artisans and craftsmen in the town of Bagac, Bataan. Las Casas
              features the finest of Filipino craftsmanship, artistry, and skill giving
              the property a look and feel that is distinctive and its own.
          </p>
          <br/>

        <p>
            Las Casas blends the charm and character of the nation’s past with exceptionally
            welcoming and personalized service in a relaxed beach resort and hotel setting.
        </p>

          <Bbuttons>
            <a href="https://staahmax.staah.net/be/index_be?propertyId=MzcxNQ==&individual=true"><button>INQUIRE NOW</button></a>
            <a href="https://lascasasfilipinas.com/SpecialOffers"><button>SEE OFFERS</button></a>
          </Bbuttons>
        </Bdesc>

        {/**list of offers 
         <BListOffers>
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
        </BListOffers> */}

      </PropertyMain>
    </>
  )
}

export default BataanHero