import React from 'react';

const SingleOffer = (props) => {

    const {title, isNew} = props.data;

    return ( 
        <div className="single_offer">
            {isNew && <div className="dot"></div>}
            <p>{title}</p>
            {isNew && <p className="small">(nowość)</p>}
        </div>
     );
}
 
export default SingleOffer;