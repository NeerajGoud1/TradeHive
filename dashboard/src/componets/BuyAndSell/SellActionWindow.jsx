import React, { useState, useContext, useRef } from "react";
import axios from "axios";
import GeneralContext from "../GeneralContext";
import { SuccessAlert, FailAlert } from "../Alert"; // Import FailAlert
import "./BuyActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFail, setShowFail] = useState(false);
  const [failMsg, setFailMsg] = useState("");

  const { closeSellWindow } = useContext(GeneralContext);

  const modalRef = useRef(null);
  const offset = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    const modal = modalRef.current;
    offset.current = {
      x: e.clientX - modal.getBoundingClientRect().left,
      y: e.clientY - modal.getBoundingClientRect().top,
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    const modal = modalRef.current;
    modal.style.left = `${e.clientX - offset.current.x}px`;
    modal.style.top = `${e.clientY - offset.current.y}px`;
    modal.style.transform = "none";
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const handleSellClick = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.post(
        "http://localhost:3002/api/newOrder",
        {
          name: uid,
          qty: stockQuantity,
          price: stockPrice,
          mode: "SELL",
        },
        {
          headers: { Authorization: `Bearer ${token}` },
          validateStatus: () => true,
        }
      );

      if (res.status !== 200) {
        setFailMsg(res.data.message || "Failed to place sell order.");
        setShowFail(true);
        setTimeout(() => {
          setShowFail(false);
        }, 2000);
        return;
      }

      setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);
        closeSellWindow();
      }, 1000);
    } catch (error) {
      console.error("Sell order failed", error);
      setFailMsg("Failed to place sell order. please try again later");
      setShowFail(true);
    }
  };

  return (
    <>
      {showSuccess && <SuccessAlert message="Stock sold successfully!" />}
      {showFail && <FailAlert message={failMsg} />}
      <div
        className="container"
        id="buy-window"
        ref={modalRef}
        onMouseDown={handleMouseDown}
      >
        <div className="regular-order">
          <div className="inputs">
            <fieldset>
              <legend>Qty.</legend>
              <input
                type="number"
                name="qty"
                id="qty"
                min="1"
                onChange={(e) => setStockQuantity(e.target.value)}
                value={stockQuantity}
              />
            </fieldset>
            <fieldset>
              <legend>Price</legend>
              <input
                type="number"
                name="price"
                id="price"
                step="0.05"
                onChange={(e) => setStockPrice(parseFloat(e.target.value))}
                value={stockPrice}
              />
            </fieldset>
          </div>
        </div>

        <div className="buttons">
          <span>
            Expected credit ₹{(stockQuantity * stockPrice).toFixed(2)}
          </span>
          <div>
            <button className="btn btn-blue" onClick={handleSellClick}>
              Sell
            </button>
            <button className="btn btn-grey" onClick={closeSellWindow}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellActionWindow;
