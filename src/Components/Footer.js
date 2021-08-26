import React from 'react';
import '../Stylesheet/Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="networkIcons">
        <div className="imageIcon">
          <img src="https://cdn.shopify.com/s/files/1/0362/7771/4988/files/innung.png?v=1588889363" />
        </div>
        <div className="imageIcon">
          <img src="https://cdn.shopify.com/s/files/1/0362/7771/4988/files/duvenstedtaktiv.png?v=1588889368" />
        </div>

        <div className="imageIcon">
          <img src="https://cdn.shopify.com/s/files/1/0362/7771/4988/files/Logo_Klimaneutral_front_magnific.png?v=1592335165" />
        </div>

        <div className="imageIcon">
          <img src="https://cdn.shopify.com/s/files/1/0362/7771/4988/files/googlepay.png?v=1588889374" />
        </div>
        <div className="imageIcon">
          <img src="https://cdn.shopify.com/s/files/1/0362/7771/4988/files/logo_umweltpartnerschaft_2019_67fa7b47-c527-4fa4-b4f8-9dddfb836d31.png?v=1592334923" />
        </div>

        <div className="imageIcon">
          <img src="https://cdn.shopify.com/s/files/1/0362/7771/4988/files/klimaneutral.png?v=1588889576" />
        </div>

        <div className="imageIcon">
          <img src="https://cdn.shopify.com/s/files/1/0362/7771/4988/files/ezgif.com-gif-maker.png?v=1615563773" />
        </div>
      </div>
      <div className="addressPlace">
        <div className="rateYearAndTraditions">
          <div className="goldRate">
            <h3>Gold rate today (old gold): {1524}</h3>
            <br />
            <p>Information on buying gold</p>
            <p>data protection</p>
            <p>imprint</p>
            <p>040 - 600 5533 00</p>
          </div>
          <div className="invitation">
            <h3>Invitation to events once a year</h3>
            <div className="registrationField">
              <div className="fieldsSections">
                <div className="inputField">
                  <input type="email" className="registration" />
                  <input type="submit" className="registrationButton" />
                </div>
              </div>
            </div>
          </div>
          <div className="traditionyears">
            <h3>90 years of tradition</h3>
            <br />
            <p>
              Since 2018 carbon neutral and RE-
              <br />
              GOLD
            </p>
            <p>since 2019 plastic neutral</p>
            <p>since 2020 FAIR MINED certified</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
