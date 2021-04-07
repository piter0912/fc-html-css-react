import React from 'react';

const SingleOffer = (props) => {
    return ( 
        <div className="single_offer">
            {props.isNew && <div className="dot"></div>}
            <p>{props.title}</p>
            {props.subtitle !== "" && <p className="small">props.subtitle</p>}
        </div>
     );
}
 
export default SingleOffer;