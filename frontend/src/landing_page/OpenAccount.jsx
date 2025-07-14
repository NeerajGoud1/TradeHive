import React from "react";
import { useNavigate } from "react-router-dom";

function OpenAccount() {
  const navigate = useNavigate();
  return (
    <div className="container mt-3">
      <div className="row justify-content-center text-center">
        <div className="col-12">
          <h1 className="mt-5">Open a Zerodha account</h1>
          <p className="mt-3">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>
          <button
            className="btn btn-primary mt-3 px-4 mb-5"
            onClick={() => {
              navigate("/signup");
              window.scrollTo(0, 0);
            }}
          >
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;
