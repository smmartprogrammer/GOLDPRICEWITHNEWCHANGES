import React from 'react';

const GoldRates = () => {
  return (
    <div className="goldRates">
      <div className="query">
        <input type="text" placeholder="Price" className="priceInput" />
        <br />
        <button className="goldbutton">900 coin</button>
        <button className="goldbutton">750 gold</button>
        <br />
        <button className="goldbutton">585 gold</button>
        <button className="goldbutton">333 gold</button>
        <br />
        <input type="text" placeholder="Gram" className="priceInput" />
      </div>
      <div className="result">second</div>
    </div>
  );
};

export default GoldRates;
