import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom sticky-top"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-2">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img
            src="media/images/logo.svg"
            alt="Logo"
            style={{ maxWidth: "150px" }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/signup">
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/product">
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/support">
                Support
              </Link>
            </li>
            {/* Example: Dashboard button */}
            {/* <li className="nav-item">
              <button
                className="nav-link active btn btn-link"
                style={{
                  textDecoration: "none",
                  padding: 0,
                  cursor: "pointer",
                }}
                onClick={() => {
                  if (token) {
                    window.location.href = `http://localhost:5174/dashboard?token=${token}`;
                  } else {
                    navigate("/signup");
                  }
                }}
              >
                Dashboard
              </button>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
