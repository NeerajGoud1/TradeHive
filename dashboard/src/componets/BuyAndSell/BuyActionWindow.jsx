import React, { useState, useContext, useRef } from "react";
import axios from "axios";
import GeneralContext from "../GeneralContext";
import { SuccessAlert } from "../Alert";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [showSuccess, setShowSuccess] = useState(false);
  const { closeBuyWindow } = useContext(GeneralContext);

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

  const handleBuyClick = async () => {
    const token = localStorage.getItem("token");
    try {
      await axios.post(
        "http://localhost:3002/api/newOrder",
        {
          name: uid,
          qty: stockQuantity,
          price: stockPrice,
          mode: "BUY",
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);
        closeBuyWindow();
      }, 1000);
    } catch (error) {
      console.error("Order failed", error);
    }
  };

  return (
    <>
      {showSuccess && <SuccessAlert message="Order placed successfully!" />}
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
                onChange={(e) => setStockPrice(e.target.value)}
                value={stockPrice}
              />
            </fieldset>
          </div>
        </div>

        <div className="buttons">
          <span>Margin required ₹140.65</span>
          <div>
            <button className="btn btn-blue" onClick={handleBuyClick}>
              Buy
            </button>
            <button className="btn btn-grey" onClick={closeBuyWindow}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyActionWindow;
