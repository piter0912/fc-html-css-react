import React from 'react';

const Top = () => {
    return ( 
        <section className="top">
            <div className="first">
                <h1>Nasza firma oferuje najwyższej <br />jakości produkty</h1>
                <p>Nie wierz nam na słowo - sprawdź</p>

                <a href="#offer">
                    <button className="offer_button">
                        oferta
                    </button>
                </a>
            </div>
        </section>
    );
}
 
export default Top;