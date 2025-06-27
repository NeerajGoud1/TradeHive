import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
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
          <h5>{totalInvestment}</h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>{totalcurrValue}</h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>
            {pandl.toFixed(2)} ({plPercentage.toFixed(2)}%)
          </h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;
