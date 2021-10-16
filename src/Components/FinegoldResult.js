// import React, { useState } from 'react';

// const FineGoldResult = () => {
//     const FirstHeadingHandler = () => {
//         if (ValueOfNinetyNine) {
//             return 'Fine Gold';
//         } else if (!active) {
//             return 'Fine Gold';
//         } else if (active) {
//             return 'We pay';
//         } else {
//             return 'Fine Gold';
//         }
//     };
//     const FirstGoldRateHandler = () => {
//         if (currentOption == 750) {
//             console.log("the Value is 750");
//             // console.log("yes it's correct number", currentOption)
//         }
//         else {
//             return active;
//         }
//     };

//     const FirstJeweleryHeadingHandler = () => {
//         if (ValueOfNinetyNine && active) {
//             return 'Fine Gold Price'; // this is second line heading
//         } else if (ValueOfNinetyNine) {
//             return 'Jewelry Gold';
//         } else if (active) {
//             return 'Jewelry Gold Price'; // this condition will run when we just only click on any gold button and then when will submit the current text will appear
//         } else {
//             return 'Jewelry Gold';
//         }
//     };


//     const SecondgoldPriceHandler = () => {
//         if (ValueOfNinetyNine) {
//             var fineGoldHandling = Math.round((active / 1000) * fineGoldPrice);
//             if (fineGoldHandling) {
//                 return fineGoldHandling;
//                 setSecondCondition(true)
//             } else {
//                 return '0';
//             }
//         } else if (active) {
//             var jewelryGoldHandling = Math.round(
//                 (active / 1000) * jewelleryGoldPrice,
//             );
//             return jewelryGoldHandling;
//         } else {
//             return jewelleryGoldPrice;
//         }
//     };

//     return (
//         <div className="goldsections">
//             <div className="finegoldsection">
//                 <div className="firstfine">{FirstHeadingHandler()}</div>
//                 <div className="secondfine">
//                     {active ? FirstGoldRateHandler() : fineGoldPrice}
//                     <span className="europergram">€/g</span>
//                 </div>
//             </div>
//             <div className="jewellerygoldsection">
//                 <div className="firstjewellery">
//                     {FirstJeweleryHeadingHandler()}
//                 </div>
//                 <div className="secondjewellery">
//                     {SecondgoldPriceHandler()}
//                     <span className="europergram">€/g</span>
//                 </div>
//             </div>
//         </div>
//     )
// }


// export default FineGoldResult;