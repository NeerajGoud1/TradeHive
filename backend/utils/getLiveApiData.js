// import finnhub from "finnhub";

// const api_key = finnhub.ApiClient.instance;
// api_key.authentications["api_key"].apiKey =
//   "d1efi99r01qjssrjps40d1efi99r01qjssrjps4g";
// const finnhubClient = new finnhub.DefaultApi();
// async function convertUsdToInr(usd) {
//   const rate = 83.2; // hardcoded rate
//   return parseFloat((usd * rate).toFixed(2));
// }

// // Async wrapper for quote using await
// export async function getopenandcurrprice(symbol) {
//   const quoteData = await getQuoteData(symbol);

//   const openingINR = await convertUsdToInr(quoteData.o);
//   const currentINR = await convertUsdToInr(quoteData.c);

//   return {
//     symbol,
//     openingPriceINR: openingINR,
//     currentPriceINR: currentINR,
//   };
// }

// // Helper to wrap callback into awaitable function
// async function getQuoteData(symbol) {
//   return new Promise((resolve, reject) => {
//     finnhubClient.quote(symbol, (error, data) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// }

export function getopenAndCurrValue(symbol) {
  const currentPrices = {
    INFY: 1555.45,
    ONGC: 116.8,
    TCS: 3194.8,
    KPITTECH: 266.45,
    QUICKHEAL: 308.55,
    WIPRO: 577.75,
    "M&M": 779.8,
    RELIANCE: 1207,
    HUL: 1199,
  };

  const openingPrices = {
    INFY: 1530.0,
    ONGC: 118.5,
    TCS: 3230.0,
    KPITTECH: 260.0,
    QUICKHEAL: 280.0,
    WIPRO: 570.0,
    "M&M": 780.5,
    RELIANCE: 1200,
    HUL: 1100,
  };
  return [currentPrices[`${symbol}`], openingPrices[`${symbol}`]];
}
