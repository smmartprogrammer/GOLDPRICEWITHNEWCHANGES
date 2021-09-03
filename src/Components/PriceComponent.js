import React, { useState, useEffect } from 'react';
import '../Stylesheet/PriceComponent.css';

const PriceComponent = () => {
  const [price, setPrice] = useState(15);
  // const [price, setPrice] = useState();
  const [gram, setGram] = useState(0);
  const [nineHunderdCoins, setNineHundredCoins] = useState(900);
  const [sevenFiftyGold, setSevenFiftyGold] = useState(750);
  const [fiveEightyFiveGold, setFiveEightyFiveGold] = useState(585);
  const [threeHundredThirtyThreeGold, setThreeHundredThirtyThreeGold] =
    useState(333);
  const [currentOption, setCurrentOption] = useState();
  const [inputedGoldPrice, setInputedGoldPrice] = useState(0);
  const [active, setActive] = useState(0);
  const [newGram, setNewGram] = useState();
  const [newValue, setNewValue] = useState(0);
  const [webapi, setwebapi] = useState([]);
  const [ValueOfNinetyNine, setValueOfNinetyNine] = useState();
  const [apiValue, setApiValue] = useState(43.06);

  const priceHandling = (e) => {
    setPrice(e.target.value);
  };

  const gramWeightHandling = (e) => {
    setGram(e.target.value);
    console.log('this is gram', gram);
  };

  const handleSubmit = () => {
    setInputedGoldPrice(price);
    setCurrentOption(gram);
    setActive(currentOption);
    console.log(ValueOfNinetyNine);
  };

  const refresher = () => {
    setValueOfNinetyNine();
    setActive();
  };

  const firstbtn = () => {
    setCurrentOption(nineHunderdCoins);
  };
  const secondBtn = () => {
    setCurrentOption(sevenFiftyGold);
  };

  const thirdBtn = () => {
    setCurrentOption(fiveEightyFiveGold);
  };

  const fourthBtn = () => {
    setCurrentOption(threeHundredThirtyThreeGold);
  };

  const ninetyNinePriceHandler = () => {
    setValueOfNinetyNine(46.26);
  };

  // const localdatastore = () => {
  //   localStorage.setItem('webapidata', webapi);
  // };

  // async function fetchdata() {
  //   const response = await fetch(
  //     'https://jsonplaceholder.typicode.com/todos/1',
  //   );
  //   const data = await response.json();
  //   setwebapi(data);
  //   // console.log(webapi.rates.XAU);
  //   // localStorage.setItem('Rates', webapi.rates.XAU);
  // }

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch(
  //       'https://metals-api.com/api/latest?access_key=rcgf88qitlo794lf9dkqo09n6lslkyfx7t23pcciee3bp41otjfnmhcty86l&base=EUR&symbols=XAU',
  //     );
  //     console.log('response: ', response);
  //     let data = await response.json();
  //     setwebapi(data);
  //     // localStorage.setItem('Rates', webapi.rates.XAU);
  //     console.log('Data', webapi.XAU);
  //     setPrice(data.rates.XAU);
  //     console.log(data);
  //     console.log('from state', webapi);
  //   }

  //   fetchData();
  // }, []);

  function getTime() {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let currenttime = `${hours}:${minutes}:${seconds}`;
    console.log(currenttime);
    localStorage.setItem('time', currenttime);
    let currentnewdata = localStorage.getItem('time', currenttime);
  }

  function Nineam() {
    getTime();
  }

  Nineam();

  return (
    <div className="priceMain">
      <div className="priceMain_first">
        <div className="queries">
          <div className="heading">Price Options </div>
          <div className="fieldArea">
            {/* <input
              className="number"
              type="number"
              placeholder="999,9/-"
              value={price}
              onChange={priceHandling}
            /> */}
            <button className="btn" onClick={ninetyNinePriceHandler}>
              999,9
            </button>

            <input
              className="number"
              type="number"
              placeholder="Grams"
              onChange={gramWeightHandling}
            />
            <br />
            <button
              className="btn"
              onClick={firstbtn}
              disabled={gram ? true : false}
            >
              900 Coin
            </button>
            <button
              className="btn"
              onClick={secondBtn}
              disabled={gram ? true : false}
            >
              750 Gold
            </button>
            <button
              className="btn"
              onClick={thirdBtn}
              disabled={gram ? true : false}
            >
              585 Gold
            </button>
            <button
              className="btn"
              onClick={fourthBtn}
              disabled={gram ? true : false}
            >
              333 Gold
            </button>
            <br />

            <button type="submit" onClick={handleSubmit} className="btn">
              Submit
            </button>
            <button type="reset" onClick={refresher} className="btn">
              Refresh
            </button>
            <br />
          </div>
        </div>
        <div className="resultDisplayer">
          <div className="line"></div>
          {/* <div className="heading goldRatesecondHeading "> */}

          {/* Revised Jewelry Gold: €{Math.round(inputedGoldPrice)} */}
          {/* <h3 className="secondPriceHeading">
              Current Jewelry Gold */}
          {/* {Math.round(webapi.rates.XAU)} gram Current */}
          {/* Jewelry Gold {15} gram */}
          {/* </h3> */}
          {/* </div> */}
          {/* <br /> */}

          <div className="resultOutput">
            <div className="exactResult">
              <div className="goldsections">
                <div className="finegoldsection">
                  <div className="firstfine">
                    {!active ? 'Fine Gold' : 'Fine Gold'}
                    {/* Fine gold */}
                  </div>
                  <div className="secondfine">
                    {!active ? '46,07' : active}€/g
                  </div>
                </div>
                <div className="jewellerygoldsection">
                  <div className="firstjewellery">
                    {!ValueOfNinetyNine ? 'Jewelry gold' : 'Fine gold Price'}
                  </div>
                  <div className="secondjewellery">
                    {/* {!inputedGoldPrice? '43.06'
                      : Math.round((inputedGoldPrice / 1000) * active)}
                    € */}

                    {!ValueOfNinetyNine
                      ? '43.06'
                      : Math.round((ValueOfNinetyNine / 1000) * active)}
                  </div>
                </div>
              </div>

              {/* {Math.round((inputedGoldPrice / 1000) * active)}€ */}
            </div>
          </div>

          {/* <h3 className="secondPriceHeading">Price of {active} gram</h3> */}
        </div>
      </div>
    </div>
  );
};

export default PriceComponent;
