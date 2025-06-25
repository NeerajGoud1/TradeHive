import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="container p-5">
        <div className="row pt-5">
          <div className="col-10">
            <h4>Support Portal</h4>
          </div>
          <div className="col-2">
            <p>Track tickets</p>
          </div>
        </div>
        <div className="row ">
          <div className="col-8">
            <h4 className="mt-5">
              {" "}
              Search for an answer or browse help topics to create a ticket
            </h4>
            <input
              type="text"
              placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."
              style={{ width: "80%", height: "3rem" }}
              className="mt-4 form-control"
            />
            <br></br>
            <div className="mb-5">
              <a style={{ marginLeft: "1rem", textDecoration: "underline" }}>
                Track account opening
              </a>
              <a style={{ marginLeft: "1rem", textDecoration: "underline" }}>
                {" "}
                Track segment activation
              </a>
              <a style={{ marginLeft: "1rem", textDecoration: "underline" }}>
                {" "}
                Intraday margins
              </a>
            </div>
          </div>
          <div className="col-4 mb-5 ">
            <h4 className="mt-5">Featured</h4>
            <p style={{ textDecoration: "underline" }}>
              1. Surveillance measure on scrips - June 2025
            </p>

            <p style={{ textDecoration: "underline" }}>
              2. Rights Entitlements listing in June 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
