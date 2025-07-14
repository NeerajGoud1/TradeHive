import React from "react";

function Awards() {
  return (
    <div className="container mt-5 mb-5 p-5">
      <div className="row align-items-center">
        {/* Image column */}
        <div className="col-md-6 mb-4 mb-md-0 text-center">
          <img
            src="media/images/largestBroker.svg"
            alt="Largest Broker"
            className="img-fluid"
          />
        </div>

        {/* Content column */}
        <div className="col-md-6">
          <h2>Largest stock broker in India</h2>
          <p>
            2+ million TradeHive clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="row mt-4">
            <div className="col-6">
              <ul className="list-unstyled">
                <li>Futures and Options</li>
                <li>Commodity Derivatives</li>
                <li>Currency Derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul className="list-unstyled">
                <li>Stocks & IPOs</li>
                <li>Direct Mutual Funds</li>
                <li>Bonds and Govt Securities</li>
              </ul>
            </div>
          </div>

          <div className="mt-4">
            <img
              src="media/images/pressLogos.png"
              alt="Press Logos"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
