import React from 'react';
import '../Stylesheet/Paragraph.css';

const Paragraph = () => {
  return (
    <div className="mainParaBox">
      <div className="FirstHeading">
        <p>Gold price gold purchase / gold sale</p>
      </div>
      <div className="secondParabox">
        <h4>GOLD RATE TODAY</h4>
        <p className="firstPara">
          You can find today's gold rate here if you sell jewelry, teeth, gold
          bars or similar in Hamburg, Duvenstedt or Blankenese. Always up to
          date, always at fair prices and without discount. We advise free of
          charge, set your stones for you and calculate exactly.
          <br />
          <br />
          <a
            className="moreinforLInk"
            href="https://goldschmiede.store/pages/goldankauf"
          >
            more info
          </a>
          <br />
          <br />
          <br />
          <br />
          <br />
        </p>
        <div className="thirdBox">
          <h2>ATTENTION!!! MAINTENANCE WORK!</h2>
          <br />
          <br />
          <p>
            We are currently testing the display and programming, which is why
            the numbers here are changed arbitrarily. You can find the correct
            price at gold-blankenese.de
          </p>
          <br />
          <br />
          <h4>GOLD COURSE</h4>
        </div>
      </div>
    </div>
  );
};

export default Paragraph;
