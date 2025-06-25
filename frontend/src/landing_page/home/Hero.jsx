import React from "react";

function Hero() {
  return (
    <div className="container mb-5 p-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          className="mb-5"
          style={{ width: "75%", margin: "auto" }}
        />
        <h1 className="mt-5">Invest in everything</h1>
        <p className="mt-3">
          Online Platform to invest in stocks, derivatives , mutual funds and
          more
        </p>
        <button
          className="p-2 btn btn-primary  mt-3"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
