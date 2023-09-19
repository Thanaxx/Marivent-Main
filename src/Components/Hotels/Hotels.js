import React from 'react';
import {PropertyWrap, PropCont} from '../../Styles/HotelsStyle';
import PropertyDetails from '../../data/properties';


function Hotels() {
  return (
    <>
        <PropertyWrap>
          {PropertyDetails.map((items, index) => (
            <>
              <PropCont>
                <img src={items.image} alt="" />
                <h1>{items.name}</h1>
                <p>{items.description}</p>
                <a href={items.url}><button>VIEW MORE</button></a>
              </PropCont>
            </>
          ))}
        </PropertyWrap>
    </>
  )
}

export default Hotels