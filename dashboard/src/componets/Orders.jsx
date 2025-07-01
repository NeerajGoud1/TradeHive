import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Empty from "./Empty";
import { useNavigate } from "react-router-dom";
const Orders = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getOrders = async () => {
      let token = localStorage.getItem("token");
      try {
        let response = await axios.get(
          "http://localhost:3002/api/orders",
          {
            headers: { Authorization: `Bearer ${token}` },
          },
          {
            validateStatus: () => true,
          }
        );
        setOrders(response.data);
      } catch (err) {
        console.error("Fetch failed:", err);
      }
    };
    getOrders();
  }, []);

  return (
    <>
      {orders.length == 0 ? (
        <Empty
          message="You haven't placed any orders today"
          buttonText="Get started"
          onButtonClick={() => navigate("/dashboard")}
        />
      ) : (
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
      )}
    </>
  );
};

export default Orders;
