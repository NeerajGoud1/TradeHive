import React, { useState } from "react";

function Brokerage() {
  const [activeTab, setActiveTab] = useState("equity");

  return (
    <div className="container mt-5 ">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "equity" ? "active" : ""}`}
            onClick={() => setActiveTab("equity")}
          >
            Equity
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "currency" ? "active" : ""}`}
            onClick={() => setActiveTab("currency")}
          >
            Currency
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "commodity" ? "active" : ""}`}
            onClick={() => setActiveTab("commodity")}
          >
            Commodity
          </button>
        </li>
      </ul>

      <div className="tab-content border border-top-0 p-3 mb-5">
        {activeTab === "equity" && (
          <div className="container mt-5 ">
            <div className="table-responsive">
              <table className="table  no-inner-borders text-center align-middle">
                <thead className="table-light">
                  <tr>
                    <th></th>
                    <th>Equity delivery</th>
                    <th>Equity intraday</th>
                    <th>F&amp;O - Futures</th>
                    <th>F&amp;O - Options</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Brokerage</th>
                    <td>Zero Brokerage</td>
                    <td>0.03% or Rs. 20/executed order whichever is lower</td>
                    <td>0.03% or Rs. 20/executed order whichever is lower</td>
                    <td>
                      {" "}
                      <p className="text-center mt-5 mb-5">
                        Flat Rs. 20 per executed order
                      </p>
                    </td>
                  </tr>
                  <tr className="table-light">
                    <th>STT/CTT</th>
                    <td>0.1% on buy &amp; sell</td>
                    <td>0.025% on the sell side</td>
                    <td>0.02% on the sell side</td>
                    <td className="text-start">
                      <ul className="mb-3 mt-3">
                        <li>
                          0.125% of the intrinsic value on options that are
                          bought and exercised
                        </li>
                        <li>0.1% on sell side (on premium)</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th>Transaction charges</th>
                    <td>
                      NSE: 0.00297%
                      <br />
                      BSE: 0.00375%
                    </td>
                    <td>
                      NSE: 0.00297%
                      <br />
                      BSE: 0.00375%
                    </td>
                    <td>
                      NSE: 0.00173%
                      <br />
                      BSE: 0
                    </td>
                    <td>
                      <p className="mt-4 mb-4">
                        NSE: 0.03503% (on premium)
                        <br />
                        BSE: 0.0325% (on premium)
                      </p>
                    </td>
                  </tr>
                  <tr className="table-light">
                    <th>GST</th>
                    <td colSpan="4">
                      <p className="mt-3 mb-3">
                        18% on (brokerage + SEBI charges + transaction charges)
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <th>SEBI charges</th>
                    <td>₹10 / crore</td>
                    <td>₹10 / crore</td>
                    <td>₹10 / crore</td>
                    <td>
                      <p className="mt-2 mb-2">₹10 / crore </p>
                    </td>
                  </tr>
                  <tr className="table-light">
                    <th>Stamp charges</th>
                    <td>0.015% or ₹1500 / crore on buy side</td>
                    <td>0.003% or ₹300 / crore on buy side</td>
                    <td>0.002% or ₹200 / crore on buy side</td>
                    <td>
                      <p className="mt-4 mb-4">
                        0.003% or ₹300 / crore on buy side{" "}
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
        {activeTab === "currency" && (
          <div className="container mt-5 ">
            <div className="table-responsive">
              <table className="table no-inner-borders text-center align-middle">
                <thead className="table-light">
                  <tr>
                    <th></th>
                    <th>Currency futures</th>
                    <th>Currency options</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Brokerage</th>
                    <td>0.03% or ₹ 20/executed order whichever is lower</td>
                    <td>
                      <p className="mt-3 mb-3">₹ 20/executed order</p>
                    </td>
                  </tr>
                  <tr className="table-light">
                    <th>STT/CTT</th>
                    <td>No STT</td>
                    <td>
                      {" "}
                      <p className="mt-3 mb-3">No STT </p>
                    </td>
                  </tr>
                  <tr>
                    <th>Transaction charges</th>
                    <td>
                      NSE: 0.00035%
                      <br />
                      BSE: 0.00045%
                    </td>
                    <td>
                      <p className="mt-3 mb-3">
                        NSE: 0.0311%
                        <br />
                        BSE: 0.001%
                      </p>
                    </td>
                  </tr>
                  <tr className="table-light">
                    <th>GST</th>
                    <td colSpan="2">
                      <p className="mt-3 mb-3">
                        18% on (brokerage + SEBI charges + transaction charges)
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <th>SEBI charges</th>
                    <td>₹10 / crore</td>
                    <td>
                      {" "}
                      <p className="mt-2 mb-2">₹10 / crore </p>
                    </td>
                  </tr>
                  <tr className="table-light">
                    <th>Stamp charges</th>
                    <td>0.0001% or ₹10 / crore on buy side</td>
                    <td>
                      {" "}
                      <p className="mt-2 mb-2">
                        0.0001% or ₹10 / crore on buy side
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
        {activeTab === "commodity" && (
          <div className="container mt-5">
            <div className="table-responsive">
              <table className="table no-inner-borders text-center align-middle">
                <thead className="table-light">
                  <tr>
                    <th></th>
                    <th>Commodity futures</th>
                    <th>Commodity options</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Brokerage</th>
                    <td>0.03% or Rs. 20/executed order whichever is lower</td>
                    <td>
                      <p className="mt-3 mb-3">₹ 20/executed order</p>
                    </td>
                  </tr>
                  <tr className="table-light">
                    <th>STT/CTT</th>
                    <td>0.01% on sell side (Non-Agri)</td>
                    <td>
                      {" "}
                      <p className="mt-3 mb-3">No STT </p>
                    </td>
                  </tr>
                  <tr>
                    <th>Transaction charges</th>
                    <td>
                      MCX: 0.0021%
                      <br />
                      NSE: 0.0001%
                    </td>
                    <td>
                      <p className="mt-3 mb-3">
                        MCX: 0.0418%
                        <br />
                        NSE: 0.001%
                      </p>
                    </td>
                  </tr>
                  <tr className="table-light">
                    <th>GST</th>
                    <td colSpan="2">
                      <p className="mt-3 mb-3">
                        18% on (brokerage + SEBI charges + transaction charges)
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <th>SEBI charges</th>
                    <td>
                      Agri: ₹1 / crore <br />
                      Non-agri: ₹10 / crore
                    </td>
                    <td>
                      {" "}
                      <p className="mt-2 mb-2">₹10 / crore </p>
                    </td>
                  </tr>
                  <tr className="table-light">
                    <th>Stamp charges</th>
                    <td>0.002% or ₹200 / crore on buy side</td>
                    <td>
                      {" "}
                      <p className="mt-2 mb-2">
                        0.003% or ₹300 / crore on buy side
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
      <div className="container mt-5 ">
        <h3 className="mb-4 mt-5">Charges for account opening</h3>
        <div className="table-responsive">
          <table className="table table-bordered align-middle no-inner-borders">
            <thead className="table-light">
              <tr>
                <th>
                  <p className="mt-2 mb-2">Type of account</p>
                </th>
                <th className="text-center ">
                  <p className="mt-2 mb-2">Charges</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p className="mt-2 mb-2">Online account</p>
                </td>
                <td className="text-center">
                  <span className="badge bg-success px-3 py-2">FREE</span>
                </td>
              </tr>
              <tr className="">
                <td>
                  <p className="mt-2 mb-2">Offline account</p>
                </td>
                <td className="text-center">
                  <span className="badge bg-success px-3 py-2">FREE</span>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="mt-2 mb-2">NRI account (offline only)</p>
                </td>
                <td className="text-center">₹ 500</td>
              </tr>
              <tr className="">
                <td>
                  <p className="mt-2 mb-2">
                    Partnership, LLP, HUF, or Corporate accounts (offline only)
                  </p>
                </td>
                <td className="text-center">₹ 500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="container mt-5">
        <h3 className="mb-4">Charges for optional value added services</h3>
        <div className="table-responsive">
          <table className="table table-bordered align-middle no-inner-borders">
            <thead className="table-light">
              <tr>
                <th>
                  <p className="mt-2 mb-2">Service</p>
                </th>
                <th>
                  {" "}
                  <p className="mt-2 mb-2">Billing Frquency</p>
                </th>
                <th>
                  {" "}
                  <p className="mt-2 mb-2">Charges</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p className="mt-2 mb-2">Tickertape</p>
                </td>
                <td>Monthly / Annual</td>
                <td>Free: 0 | Pro: 249/2399</td>
              </tr>
              <tr className="">
                <td>
                  <p className="mt-2 mb-2">Smallcase</p>
                </td>
                <td>Per transaction</td>
                <td>Buy &amp; Invest More: 100 | SIP: 10</td>
              </tr>
              <tr>
                <td>
                  <p className="mt-2 mb-2">Kite Connect</p>
                </td>
                <td>Monthly</td>
                <td>Connect: 500 | Historical: 500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
