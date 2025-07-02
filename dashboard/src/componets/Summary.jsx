import React, { useEffect, useState } from "react";
import axios from "axios";

const Summary = () => {
  const [holdings, setHoldings] = useState([]);
  const [user, setUser] = useState([]);

  const profitStyle = {
    color: "rgb(72, 194, 55);",
  };
  const lossStyle = {
    color: "rgb(250, 118, 78)",
  };
  const totalInvestment = holdings
    .reduce((acc, stock) => acc + stock.avg * stock.qty, 0)
    .toFixed(2);

  const totalCurrValue = holdings
    .reduce((acc, stock) => acc + stock.price * stock.qty, 0)
    .toFixed(2);

  const pandlRaw = totalCurrValue - totalInvestment;

  const pandl = pandlRaw.toFixed(2);
  const plPercentage = ((pandlRaw / totalInvestment) * 100).toFixed(2);

  const isTotalProfit = pandlRaw >= 0.0;

  const totalClass = isTotalProfit ? profitStyle : lossStyle;

  function formatToK(value) {
    return (value / 1000).toFixed(2) + "k";
  }

  useEffect(() => {
    const getHoldings = async () => {
      let token = localStorage.getItem("token");
      try {
        let response = await axios.get(
          "http://localhost:3002/api/holdings",
          {
            headers: { Authorization: `Bearer ${token}` },
          },
          {
            validateStatus: () => true,
          }
        );
        let res2 = await axios.get(
          "http://localhost:3002/getuserdata",
          {
            headers: { Authorization: `Bearer ${token}` },
          },
          {
            validateStatus: () => true,
          }
        );
        setUser(res2.data.username);
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
        <h6>Hi, {user}!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>5.5k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>5.5k</span>{" "}
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
            <h3 style={totalClass}>
              {formatToK(pandl)}{" "}
              <small style={totalClass}>{plPercentage}%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>{formatToK(totalCurrValue)}</span>{" "}
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
