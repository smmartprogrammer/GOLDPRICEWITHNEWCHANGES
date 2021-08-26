import React from 'react';
import '../Stylesheet/Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contactHeading">
        <h4>Contact</h4>
      </div>
      <div className="SocialServices">
        <ul className="socialservicesIcons">
          <li>
            <img src="https://cdn.shopify.com/s/files/1/0362/7771/4988/files/Whatsapp_160x160@2x.png?v=1592310913" />
          </li>
          <li>
            <img src="https://cdn.shopify.com/s/files/1/0362/7771/4988/files/Telegram_160x160@2x.png?v=1592310910" />
          </li>
          <li>
            <img src="https://cdn.shopify.com/s/files/1/0362/7771/4988/files/Telefon_160x160@2x.png?v=1592310907" />
          </li>
          <li>
            <img src="https://cdn.shopify.com/s/files/1/0362/7771/4988/files/E-Mail_160x160@2x.png?v=1592310825" />
          </li>
          <li>
            <img src="https://cdn.shopify.com/s/files/1/0362/7771/4988/files/Instagram_160x160@2x.png?v=1592310900" />
          </li>
          <li>
            <img src="https://cdn.shopify.com/s/files/1/0362/7771/4988/files/Facebook_Messanger_160x160@2x.png?v=1592310829" />
          </li>
          <li>
            <img src="https://cdn.shopify.com/s/files/1/0362/7771/4988/files/GoogleMaps_160x160@2x.png?v=1592310898" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
