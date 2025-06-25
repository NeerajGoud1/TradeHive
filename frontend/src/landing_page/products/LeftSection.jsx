import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-7">
          <img src={imageURL} />
        </div>
        <div className="col-5 p-5 mt-5 mb-5" style={{ width: "40%" }}>
          <h1>{productName}</h1>
          <p className="mt-4" style={{ lineHeight: "27px", fontSize: "17px" }}>
            {productDesription}
          </p>
          <div>
            <a href={tryDemo}>
              Try Demo &nbsp;{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href={learnMore} style={{ marginLeft: "70px" }}>
              Learn More &nbsp;
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                style={{ marginLeft: "30px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
