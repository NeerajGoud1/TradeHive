import React from "react";

function Hero() {
  return (
    <div className="container mb-5 p-3">
      <div className="row justify-content-center text-center">
        <div className="col-12">
          <img
            src="media/images/homeHero.png"
            alt="Hero"
            className="img-fluid mb-4"
            style={{ maxWidth: "75%" }}
          />
        </div>
        <div className="col-12 p-5">
          <h1 className="mt-3">Invest in everything</h1>
          <p className="mt-3">
            Online Platform to invest in stocks, derivatives, mutual funds and
            more
          </p>
          <button className="btn btn-primary mt-3 px-4">Signup Now</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
