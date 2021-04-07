import React from 'react';
import SingleOffer from './SingleOffer';

const OffersList = () => {
    return ( 
        <div className="offers">
            <SingleOffer title="Sprzątanie" subtitle="(nowość)" isNew={true} />
            <SingleOffer title="Odkurzanie" subtitle="" isNew={false} />
            <SingleOffer title="Zmywanie naczyń" subtitle="" isNew={false} />
            <SingleOffer title="Gotowanie zupy" subtitle="" isNew={false} />
            <SingleOffer title="Mycie okien" subtitle="" isNew={false} />
            <SingleOffer title="Pieczenie ciast" subtitle="" isNew={false} />
        </div>
     );
}
 
export default OffersList;