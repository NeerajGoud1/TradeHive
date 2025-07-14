import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col-md-3 mb-4 mb-md-0 text-center text-md-start">
            <img
              src="media/images/logo.svg"
              alt="Logo"
              className="img-fluid mb-3"
              style={{ maxWidth: "150px" }}
            />
            <p className="mt-3" style={{ fontSize: "13px" }}>
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>
          <div className="col-6 col-md-3 mb-4 mb-md-0">
            <h6>Company</h6>
            <div className="footer-links d-flex flex-column gap-1">
              <a href="#">About</a>
              <a href="#">Products</a>
              <a href="#">Pricing</a>
              <a href="#">Referral programme</a>
              <a href="#">Careers</a>
              <a href="#">Zerodha.tech</a>
              <a href="#">Press & media</a>
              <a href="#">Zerodha cares (CSR)</a>
            </div>
          </div>
          <div className="col-6 col-md-3 mb-4 mb-md-0">
            <h6>Support</h6>
            <div className="footer-links d-flex flex-column gap-1">
              <a href="#">Contact</a>
              <a href="#">Support portal</a>
              <a href="#">Z-Connect blog</a>
              <a href="#">List of charges</a>
              <a href="#">Downloads & resources</a>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <h6>Account</h6>
            <div className="footer-links d-flex flex-column gap-1">
              <a href="#">Open an account</a>
              <a href="#">Fund transfer</a>
              <a href="#">60 day challenge</a>
            </div>
          </div>
        </div>

        <div
          className="mt-5 text-muted footer-para"
          style={{
            fontSize: "12px",
            fontWeight: "400",
            lineHeight: "20px",
            fontFamily: "'Inter', 'Helvetica', 'Arial', sans-serif",
          }}
        >
          <p>
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI.
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances.
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>

        <div className="row footer-down mb-4 mt-4 gy-2">
          <div className="col-6 col-md-1">
            <span>NSE</span>
          </div>
          <div className="col-6 col-md-1">
            <span>BSE</span>
          </div>
          <div className="col-6 col-md-1">
            <span>MCX</span>
          </div>
          <div className="col-6 col-md-2">
            <span>Terms & Conditions</span>
          </div>
          <div className="col-6 col-md-2">
            <span>Policies & procedures</span>
          </div>
          <div className="col-6 col-md-2">
            <span>Privacy policy</span>
          </div>
          <div className="col-6 col-md-1">
            <span>Disclosure</span>
          </div>
          <div className="col-6 col-md-2">
            <span>For investor's attention</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
