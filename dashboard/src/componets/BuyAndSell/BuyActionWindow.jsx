import React, { useState, useContext, useRef } from "react";
import axios from "axios";
import GeneralContext from "../GeneralContext";
import { SuccessAlert, FailAlert } from "../Alert";
import "./BuyActionWindow.css";
import { ProLink } from "../../ProLink";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [showSuccess, setShowSuccess] = useState(false);
  const { closeBuyWindow } = useContext(GeneralContext);
  const [showFail, setShowFail] = useState(false);
  const [failMsg, setFailMsg] = useState("");

  const currentPrices = {
    INFY: 1555.45,
    ONGC: 116.8,
    TCS: 3194.8,
    KPITTECH: 266.45,
    QUICKHEAL: 308.55,
    WIPRO: 577.75,
    "M&M": 779.8,
    RELIANCE: 1207,
    HUL: 1199,
  };

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
      const res = await axios.post(
        `${ProLink}/api/newOrder`,
        {
          name: uid,
          qty: stockQuantity,
          price: stockPrice,
          mode: "BUY",
        },
        {
          headers: { Authorization: `Bearer ${token}` },
          validateStatus: () => true,
        }
      );
      if (res.status !== 200) {
        setFailMsg(res.data.message || "Failed to place Buy order.");
        setShowFail(true);
        setTimeout(() => {
          setShowFail(false);
        }, 2000);
        return;
      }

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
          <span>Margin required {currentPrices[uid]}</span>
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
