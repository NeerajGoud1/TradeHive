import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-5 p-5 mt-5" style={{ width: "40%" }}>
          <h1>{productName}</h1>
          <p className="mt-4" style={{ lineHeight: "27px", fontSize: "17px" }}>
            {productDesription}
          </p>
          <div>
            <a href={learnMore}>
              Learn More &nbsp;&nbsp;
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="col-6">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
