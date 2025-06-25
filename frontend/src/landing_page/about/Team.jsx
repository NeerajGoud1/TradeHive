import React from "react";

function Team() {
  return (
    <div className="container">
      <h2 className="text-center mt-5">People</h2>
      <div className="row ">
        <div className="col-5 text-center ">
          <img
            src="/media/images/nithinKamath.jpg"
            style={{ borderRadius: "50%", width: "60%" }}
          />
          <p className="mt-4">
            <h4>Nithin Kamath</h4>
          </p>
          <p>Founder, CEO</p>
        </div>
        <div className="col-7  p-5 about-para " style={{ width: "55%" }}>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>Connect on Homepage / TradingQnA / Twitter</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
