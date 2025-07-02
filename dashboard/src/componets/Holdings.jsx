import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";
import { useNavigate } from "react-router-dom";
import Empty from "./Empty";

const Holdings = () => {
  const [holdings, setHoldings] = useState([]);
  const navigate = useNavigate();

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
        setHoldings(response.data);
      } catch (err) {
        console.error("Fetch failed:", err);
      }
    };
    getHoldings();
  }, []);

  // graphs
  const labels = holdings.map((subArray) => subArray["name"]); //it will return a sub array of all stocks names

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: holdings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 133, 0.22)",
      },
    ],
  };

  return (
    <>
      {holdings.length == 0 ? (
        <Empty
          message="No Holdings Yet , You have not bought any stocks. Start investing today!"
          buttonText="Get started"
          onButtonClick={() => navigate("/dashboard")}
        />
      ) : (
        <>
          {" "}
          <h3 className="title">Holdings ({holdings.length})</h3>
          <div className="order-table">
            <table>
              <tbody>
                <tr>
                  <th>Instrument</th>
                  <th>Qty.</th>
                  <th>Avg. cost</th>
                  <th>LTP</th>
                  <th>Cur. val</th>
                  <th>P&L</th>
                  <th>Net chg.</th>
                  <th>Day chg.</th>
                </tr>

                {holdings.map((stock, index) => {
                  const curVal = stock.price * stock.qty;
                  const isProfit = curVal - stock.avg * stock.qty >= 0.0;
                  const profClass = isProfit ? "profit" : "loss";
                  const dayClass = stock.isLoss ? "loss" : "profit";
                  return (
                    <tr key={index}>
                      <td>{stock.name}</td>
                      <td>{stock.qty}</td>
                      <td>{stock.avg.toFixed(2)}</td>
                      <td>{stock.price.toFixed(2)}</td>
                      <td>{curVal.toFixed(2)}</td>
                      <td className={profClass}>
                        {(curVal - stock.avg * stock.qty).toFixed(2)}
                      </td>
                      <td className={profClass}>{stock.net}</td>
                      <td className={dayClass}>{stock.day}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="row">
            <div className="col">
              <h5>₹{totalInvestment}</h5>
              <p>Total investment</p>
            </div>

            <div className="col">
              <h5>₹{totalCurrValue}</h5>
              <p>Current value</p>
            </div>

            <div className="col">
              <h5 style={totalClass}>
                ₹{pandl} ({plPercentage}%)
              </h5>
              <p>P&L</p>
            </div>
          </div>
          <VerticalGraph data={data} />
        </>
      )}
    </>
  );
};

export default Holdings;
