// import { Box } from "@material-ui/core";
// import Nightmare from "nightmare";

// function AmazonPriceTracker() {
//   const nightmare = Nightmare();

//   const parser = async () => {
//     nightmare
//       .goto("https://www.amazon.com/gp/bestsellers/?ref_=nav_cs_bestsellers")
//       .wait(".zg-carousel-general-faceout");
//       .click(".a-link-normal")
//       .run();
//       .wait()
//       .evaluate(
//         function () {
//           return document.querySelector(".a-price a-text-price a-size-medium")
//             .innerText;
//         },
//         function (name) {
//           console.log("name:", name);
//         }
//       )
//       .run();
//   };

//   return <Box>{parser()}</Box>;
// }

// export default AmazonPriceTracker;
