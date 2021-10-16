import React, { useState, useEffect } from 'react';
import '../Stylesheet/PriceComponent.css';

const PriceComponent = () => {
  // const [price, setPrice] = useState(15);
  const [price, setPrice] = useState();
  const [gram, setGram] = useState();
  const [nineHunderdCoins, setNineHundredCoins] = useState(900);
  const [sevenFiftyGold, setSevenFiftyGold] = useState(750);
  const [fiveEightyFiveGold, setFiveEightyFiveGold] = useState(585);
  const [threeHundredThirtyThreeGold, setThreeHundredThirtyThreeGold] =
    useState(333);
  const [currentOption, setCurrentOption] = useState();
  const [inputedGoldPrice, setInputedGoldPrice] = useState(0);
  const [active, setActive] = useState(0);
  const [newValue, setNewValue] = useState(0);
  const [webapi, setwebapi] = useState([]);
  const [ValueOfNinetyNine, setValueOfNinetyNine] = useState(0);
  // const [apiValue, setApiValue] = useState(43.06);
  const [fineGoldPrice, setFineGoldPrice] = useState(45.99);
  const [jewelleryGoldPrice, setJewelleryGoldPrice] = useState(42.79);
  const [disable, setDisable] = useState(false);
  const [activatedPrice, setActivatedPrice] = useState(false);

  const priceHandling = (e) => {
    setPrice(e.target.value);
  };

  const gramWeightHandling = (e) => {
    setGram(e.target.value);
  };

  const handleSubmit = () => {
    setInputedGoldPrice(price);
    setCurrentOption(gram);
    setActive(currentOption);
    console.log(ValueOfNinetyNine);
    setGram('');
  };

  const refresher = () => {
    setValueOfNinetyNine();
    setActive();
    setDisable(false);
  };

  const firstbtn = () => {
    setCurrentOption(nineHunderdCoins);
    setDisable(true);
  };
  const secondBtn = () => {
    setCurrentOption(sevenFiftyGold);
    setDisable(true);
  };

  const thirdBtn = () => {
    setCurrentOption(fiveEightyFiveGold);
    setDisable(true);
  };

  const fourthBtn = () => {
    setCurrentOption(threeHundredThirtyThreeGold);
    setDisable(true);
  };

  const ninetyNinePriceHandler = () => {
    var currentValue = Number(46.45);
    setValueOfNinetyNine(currentValue);
    // setValueOfNinetyNine(46.45);
  };

  const fineGoldRatesHandler = () => {
    console.log(ValueOfNinetyNine);
  };
  fineGoldRatesHandler();

  const FirstHeadingHandler = () => {
    if (ValueOfNinetyNine) {
      return 'Fine Gold';
    } else if (!active) {
      return 'Fine Gold';
    } else if (active) {
      return 'We pay';
    } else {
      return 'Fine Gold';
    }
  };

  const FirstGoldRateHandler = () => {
    if (currentOption == 750) {
      return 3;
    } else {
      return active;
    }
  };

  const SecondgoldPriceHandler = () => {
    if (ValueOfNinetyNine) {
      var fineGoldHandling = (active / 1000) * fineGoldPrice;

      if (fineGoldHandling) {
        return fineGoldHandling.toFixed(2);
      } else {
        return '0';
      }
    } else if (active) {
      var jewelryGoldHandling = (active / 1000) * jewelleryGoldPrice;
      console.log(jewelryGoldHandling);
      return jewelryGoldHandling.toFixed(2);
    } else {
      return jewelleryGoldPrice;
    }
  };

  const FirstJeweleryHeadingHandler = () => {
    if (ValueOfNinetyNine && active) {
      return 'Fine Gold Price'; // this is second line heading
    } else if (ValueOfNinetyNine) {
      return 'Jewelry Gold';
    } else if (active) {
      return 'Jewelry Gold Price'; // this condition will run when we just only click on any gold button and then when will submit the current text will appear
    } else {
      return 'Jewelry Gold';
    }
  };

  // const uiHandler = () => {
  //   let GoldSectionPlace = document.getElementById('GoldSectionPlace');
  //   if (ValueOfNinetyNine && active) {
  //     GoldSectionPlace.innerHTML = `
  //     ${<div className="CenteredResult">
  //         <div className="CenteredResultFirstHeading">
  //           Fine Gold Price
  //         </div>
  //         <div className="CenteredResultValue">
  //           25
  //           <span className="Centeraleuropergram">€/g</span>
  //         </div>
  //       </div>}
  //      `

  //   }
  // }

  // uiHandler()

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
  // it is just for checking purpose, dont take it seriously.

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

  // Nineam();

  return (
    <div className="priceMain">
      <div className="priceMain_first">
        <div className="queries">
          <div className="heading">Price Options </div>
          <div className="fieldArea">
            <button
              className="btn"
              disabled={disable ? disable : false}
              onClick={ninetyNinePriceHandler}
            >
              999,9
            </button>

            <input
              className="number"
              type="number"
              placeholder="Grams"
              onChange={gramWeightHandling}
              value={gram}
              disabled={disable ? disable : false}
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
          <div className="resultOutput">
            <div className="exactResult">
              <div className="goldsections" id="GoldSectionPlace">
                <div
                  className={
                    ValueOfNinetyNine ? 'finegoldsection2' : 'finegoldsection'
                  }
                >
                  <div className="firstfine">{FirstHeadingHandler()}</div>
                  <div className="secondfine">
                    {active ? FirstGoldRateHandler() : fineGoldPrice}
                    <span className="europergram">€/g</span>
                  </div>
                </div>
                <div
                  className={
                    ValueOfNinetyNine
                      ? 'jewellerygoldsection2'
                      : 'jewellerygoldsection'
                  }
                >
                  <div className="firstjewellery">
                    {FirstJeweleryHeadingHandler()}
                  </div>
                  <div className="secondjewellery">
                    {SecondgoldPriceHandler()}
                    <span className="europergram">€/g</span>
                  </div>
                </div>

                {/*
                <div
                  className={
                    ValueOfNinetyNine ? 'CenteredResult' : 'CenteredResult2'
                  }
                >
                  <div className="CenteredResultFirstHeading">
                    Fine Gold Price
                  </div>
                  <div className="CenteredResultValue">
                    {SecondgoldPriceHandler()}
                    <span className="Centeraleuropergram">€/g</span>
                  </div>
                </div> */}

                <div
                  className={
                    ValueOfNinetyNine ? 'CenteredResult' : 'CenteredResult2'
                  }
                >
                  <div className="newThree">
                    {active ? active : 0}
                    <span className="Centeraleuropergram"> g</span>
                  </div>
                  <div className="newUIDesign">Fine gold </div>
                  <div className="newUIDesign">999,9</div>
                  <div className="CenteredResultFirstHeading">
                    {SecondgoldPriceHandler()}
                    <span className="Centeraleuropergram"> €/g</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceComponent;
