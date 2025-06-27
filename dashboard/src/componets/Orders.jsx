import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        let response = await axios.get("http://localhost:3002/api/orders");
        setOrders(response.data);
        console.log(response.data);
      } catch (err) {
        console.error("Fetch failed:", err);
      }
    };
    getOrders();
  }, orders);

  return (
    <>
      {orders.length == 0 && (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>

          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      )}
      <div className="orders order-table">
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Mode</th>
            </tr>

            {orders.map((order, idx) => {
              return (
                <tr key={idx}>
                  <td>{order.name}</td>
                  <td>{order.qty}</td>
                  <td>{order.price}</td>
                  <td>{order.mode}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Orders;
