import React from "react";

function Pricing() {
  return (
    <div className="container my-5 p-5">
      <div className="row align-items-center">
        <div className="col-md-4 mb-4 mb-md-0">
          <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" className="text-decoration-none">
            See Pricing{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-md-2 d-none d-md-block"></div>
        <div className="col-md-6 mb-4 mb-md-0">
          <div className="row text-center">
            <div className="col-6 mb-3 mb-md-0 p-3 border">
              <h1 className="mb-3">₹0</h1>
              <p>
                Free equity delivery
                <br />
                and direct mutual funds
              </p>
            </div>
            <div className="col-6 p-3 border">
              <h1 className="mb-3">₹20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
