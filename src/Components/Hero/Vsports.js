import React from 'react'
import {PropertyMain, Btitle, Bcover, Blogo, Bdesc, Bbuttons, BListOffers, ListOffers} from '../../Styles/PropertyStyle';
import BataanOffers from '../../data/sports';

function Vsports() {
  return (
    <>
    <PropertyMain>
    <Btitle>
      <h1>Sports and Leisure</h1>
    </Btitle>

    <Bcover>
      <img src="/images/sports/Lap pool.jpg" alt="" />
    </Bcover>

    <Blogo>
      <img src="/images/logo/vsclub-dark.png" alt="" />
    </Blogo>

    <Bdesc>
      <p>
        Our space offers you access to a multitude of sports facilities and state-of-the-art
        fitness equipment to cater to your active lifestyle. Whether you want to spend a night
        bonding with your family, relax in our water spa pools, play a game of tennis or join
        studio classes, we’ve got you covered.
      </p>
    <br/>

    <p>
      Enjoy state-of-the-art facilities and equipment. We offer Basketball, Tennis and Badminton Courts.
      We also have private gyms, fitness gyms, and a play gym for your kids. Check out all of these and
      more only at Victoria Sports Club.
    </p>

      <Bbuttons>
        <a href="https://victoriasportsclub.com/inquiry"><button>INQUIRE NOW</button></a>
        <a href="https://victoriasportsclub.com/offers"><button>SEE OFFERS</button></a>
      </Bbuttons>
    </Bdesc>

    {/**list of offers */}

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
    </BListOffers>

  </PropertyMain>
    </>
  )
}

export default Vsports