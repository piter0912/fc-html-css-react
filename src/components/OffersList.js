import React from 'react';
import SingleOffer from './SingleOffer';
import {offersData} from '../data/offers';

const OffersList = () => {
    
    return ( 
        <div className="offers">
            {offersData.map(offer => <SingleOffer data={offer} key={offer.id}/>)}
        </div>
     );
}
 
export default OffersList;