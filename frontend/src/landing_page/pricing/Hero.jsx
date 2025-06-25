import React from "react";

function Hero() {
  return (
    <div className="container ">
      <div className="row text-center mt-5 mb-5">
        <h1 style={{ fontSize: "3rem", marginTop: "2rem" }}>Charges</h1>
        <p className="fs-5 text-muted mt-2 mb-5">
          List of all charges and taxes
        </p>
      </div>
      <div className="row mt-5">
        <div className="col text-center">
          <img
            src="media/images/pricing0.svg"
            style={{ width: "70%", marginTop: "5rem" }}
          />
          <h2 className="mt-3 "> Free equity delivery</h2>
          <p
            className="mt-4 text-muted"
            style={{ lineHeight: "30px", marginTop: "5rem" }}
          >
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage
          </p>
        </div>
        <div className="col text-center mb-5">
          <img
            src="media/images/intradayTrades.svg"
            style={{ width: "70%", marginTop: "5rem" }}
          />
          <h2 className="mt-3 ">Intraday and F&O trades</h2>
          <p className="mt-4 text-muted" style={{ lineHeight: "30px" }}>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col text-center">
          <img
            src="media/images/pricing0.svg"
            style={{ width: "70%", marginTop: "5rem" }}
          />
          <h2 className="mt-3 ">Free direct MF</h2>
          <p className="mt-4 text-muted" style={{ lineHeight: "30px" }}>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
