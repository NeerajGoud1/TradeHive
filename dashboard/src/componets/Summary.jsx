import React, { useEffect, useState } from "react";
import axios from "axios";

const Summary = () => {
  const [holdings, setHoldings] = useState([]);

  const totalInvestment = holdings
    .reduce((acc, stock) => {
      return acc + stock.avg;
    }, 0)
    .toFixed(2);

  const totalcurrValue = holdings
    .reduce((acc, stock) => {
      return acc + stock.avg * stock.qty;
    }, 0)
    .toFixed(2);

  function formatToK(value) {
    return (value / 1000).toFixed(2) + "k";
  }

  const pandl = totalcurrValue - totalInvestment;
  const plPercentage = (pandl / totalInvestment) * 100;

  useEffect(() => {
    const getHoldings = async () => {
      try {
        let response = await axios.get("http://localhost:3002/api/holdings");
        setHoldings(response.data);
      } catch (err) {
        console.error("Fetch failed:", err);
      }
    };
    getHoldings();
  }, []);
  return (
    <>
      <div className="username">
        <h6>Hi, User!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>3.74k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings (13)</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className="profit">
              {formatToK(pandl)} <small>+{plPercentage.toFixed(2)}%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>{formatToK(totalcurrValue)}</span>{" "}
            </p>
            <p>
              Investment <span>{formatToK(totalInvestment)}</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
