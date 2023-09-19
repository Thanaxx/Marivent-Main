import React from 'react';
import {PropertyMain, Btitle, Bcover, Blogo, Bdesc, Bbuttons, BListOffers, ListOffers} from '../../Styles/PropertyStyle';
import WeddingOffers from '../../data/weddings';

function WeddingsHero() {
  return (
    <>
    <PropertyMain>
            <Btitle>
              <h1>Lifetime Wedding Experience</h1>
            </Btitle>

            <Bcover>
            <img src="/wedding/prenuphero.jpg" alt="" />
            </Bcover>

            <Blogo>
            <img src="/images/logo/LCW-blue.png" alt="" />
            </Blogo>

        <Bdesc>
            <p>
                Las Casas' timeless aura makes it the premier destinations for intimate
                or grand celebrations.' Say "I do" to the picturesque Las Casas and
                open new wanders of a lifetime love story leading to the "happily ever
                after."
            </p>
        <br/>

        <p>
            With it's mission to ensure client satisfaction and deliver personal and
            unique experiences beyond expectations and Vision Las Bodas en Las Casas'
            vision is to be the leading one-stop shop for wedding services and deliver
            high-quality and value-driven wedding services while promoting Filipino
            Heritage and Culture.
        </p>
        <br/>

          <Bbuttons>
            <a href="https://lascasasweddings.com/Inquiry"><button>INQUIRE NOW</button></a>
            <a href="https://lascasasweddings.com"><button>SEE OFFERS</button></a>
          </Bbuttons>
        </Bdesc>

        {/**list of offers */}
        <BListOffers>
          {WeddingOffers.map((items, index) => (
            <>
              <ListOffers>
                <img src={items.image} alt="" />
                <h1>{items.name}</h1>
                <p>{items.desc}</p>
                <a href={items.url}><button>INQUIRE NOW</button></a>
              </ListOffers>
            </>
          ))}
        </BListOffers>

      </PropertyMain>
    </>
  )
}

export default WeddingsHero