import React from 'react';
import {PropertyMain, Btitle, Bcover, Blogo, Bdesc, Bbuttons, BListOffers, ListOffers} from '../../Styles/PropertyStyle';
import QuezonOffers from '../../data/quezon';

function QuezonHero() {
  return (
    <>
        <PropertyMain>
            <Btitle>
                <h1>Restaurant</h1>
            </Btitle>

            <Bcover>
                <img src="/images/qc/qccarousel/LCQC 04.jpg" alt="" />
            </Bcover>

            <Blogo>
                <img src="/images/logo/Logo LCQC blue.png" alt="" />
            </Blogo>

            <Bdesc>
                <p>
                    Situated at the heart of Quezon City, on Roosevelt Avenue,
                    Las Casas in Quezon City is a Dining and Events Space that offers
                    unique experiences for guests with its intricately-designed spaces,
                    delicious array of dining options to choose from, and exceptionally
                    welcoming service.
                </p>
                <br/>

                <p>
                    Las Casas in Quezon City is a member of the Las Casas Heritage Collection.
                    A line of heritage resorts and hotels in the Philippines celebrating Filipino
                    artistry, craftsmanship, service and talent. Guided by its Las Casas Spirit
                    philosophy, each property offers a unique experience and warmth of service
                    that leaves long-lasting impressions to keep guests coming back for more.
                </p>

            <Bbuttons>
                <a href="https://lascasasqc.com/"><button>INQUIRE NOW</button></a>
                <a href="https://lascasasqc.com/"><button>SEE OFFERS</button></a>
            </Bbuttons>
            </Bdesc>

            {/**list of offers */}

            <BListOffers>
            {QuezonOffers.map((items, index) => (
                <>
                <ListOffers>
                    <img src={items.image} alt="" />
                    <h1>{items.name}</h1>
                    <a href={items.url}><button>INQUIRE NOW</button></a>
                </ListOffers>
                </>
            ))}
            </BListOffers>

        </PropertyMain>
    </>
  )
}

export default QuezonHero