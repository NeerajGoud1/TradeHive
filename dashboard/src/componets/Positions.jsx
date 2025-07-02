import React, { useState, useEffect } from "react";
import axios from "axios";
import Empty from "./Empty";
import { useNavigate } from "react-router-dom";

const Positions = () => {
  const [positions, setPositions] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getPositions = async () => {
      let token = localStorage.getItem("token");
      try {
        let response = await axios.get(
          "http://localhost:3002/api/positions",
          {
            headers: { Authorization: `Bearer ${token}` },
          },
          {
            validateStatus: () => true,
          }
        );
        setPositions(response.data);
      } catch (err) {
        console.error("Fetch failed:", err);
      }
    };
    getPositions();
  }, []);
  return (
    <>
      {positions.length == 0 ? (
        <Empty
          message="You don’t have any open positions right now."
          buttonText="Get started"
          onButtonClick={() => navigate("/dashboard")}
        />
      ) : (
        <>
          {" "}
          <h3 className="title">Positions ({positions.length})</h3>
          <div className="order-table">
            <table>
              <tbody>
                <tr>
                  <th>Product</th>
                  <th>Instrument</th>
                  <th>Qty.</th>
                  <th>Avg.</th>
                  <th>LTP</th>
                  <th>P&L</th>
                  <th>Chg.</th>
                </tr>
                {positions.map((stock, index) => {
                  const curVal = stock.price * stock.qty;
                  const isProfit = curVal - stock.avg * stock.qty >= 0.0;
                  const profClass = isProfit ? "profit" : "loss";
                  const dayClass = stock.isLoss ? "loss" : "profit";
                  return (
                    <tr key={index}>
                      <td>{stock.product}</td>
                      <td>{stock.name}</td>
                      <td>{stock.qty}</td>
                      <td>{stock.avg.toFixed(2)}</td>
                      <td>{stock.price.toFixed(2)}</td>

                      <td className={profClass}>
                        {(curVal - stock.avg * stock.qty).toFixed(2)}
                      </td>

                      <td className={dayClass}>{stock.day}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
};

export default Positions;
