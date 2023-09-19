import React from 'react';
import {HighlightWrap, Htitle, HbodyList, HighlightList, Hlabel} from '../../Styles/Hightlight';
import HighlightOffers from '../../data/highlights'

function Offers() {
  return (
    <>
        <HighlightWrap>
            <Htitle>
                <h1>Highlight Offers</h1>
                <p>Combining art and elegance to bring couples celebrating important milestones a memorable occasion.</p>
            </Htitle>

            <HbodyList>
                {HighlightOffers.map((items, index) => (
                    <>
                        <HighlightList>
                            <img src={items.image} alt="" />
                            <h1>{items.name}</h1>
                            <a href={items.url}><button>LEARN MORE</button></a>
                        </HighlightList>
                    </>
                ))}
            </HbodyList>

            <Hlabel>
                <h1>“This home and its grounds will provide collectors and lovers of history a vignette of an era gone by.”</h1>
            </Hlabel>
        </HighlightWrap>
    </>
  )
}

export default Offers