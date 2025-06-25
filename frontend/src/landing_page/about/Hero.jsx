import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row text-center mt-5 mb-5 p-5  border-bottom">
        <h2 style={{ lineHeight: "45px" }} className="mb-5">
          We pioneered the discount broking model in India.
          <br />
          Now, we are breaking ground with our technology.
        </h2>
      </div>
      <div className="row">
        <div className="col p-5 about-para " style={{ width: "55%" }}>
          <p className="text-justify">
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p className="text-justify">
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p className="text-justify">
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>
        <div className="col p-5  about-para" style={{ width: "55%" }}>
          <p className="text-justify">
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p className="text-justify">
            <a href="https://rainmatter.com/ " target="_blank">
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p className="text-justify">
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our{" "}
            <a href="https://zerodha.com/z-connect/" target="_blank">
              blog
            </a>{" "}
            or see what the media is saying about us or learn more about our
            business and product philosophies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
