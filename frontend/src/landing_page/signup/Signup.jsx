import React, { useState, useEffect } from "react";
import OpenAccount from "../OpenAccount";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { TextField, Button, Typography, Link } from "@mui/material";

function Signup() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const logout = params.get("logout");
    if (logout === "1") {
      localStorage.removeItem("token");
    }
  }, []);
  const [have, setHave] = useState(false);
  const [err, setErr] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const validateFields = () => {
    if (
      !formData.email.trim() &&
      !formData.password.trim() &&
      !formData.username.trim()
    ) {
      setErr("Please enter details to continue.");
      return false;
    }
    if (!formData.email.trim()) {
      setErr("Email is required.");
      return false;
    }
    if (!formData.password.trim()) {
      setErr("Password is required.");
      return false;
    }
    if (!have && !formData.username.trim()) {
      setErr("Full Name is required.");
      return false;
    }
    setErr("");
    return true;
  };

  const handleSignup = async () => {
    if (!validateFields()) return;

    try {
      const res = await axios.post(
        "http://localhost:3002/user/register",
        {
          username: formData.username,
          email: formData.email,
          password: formData.password,
        },
        {
          validateStatus: () => true,
        }
      );

      if (res.status !== 200) {
        setErr(res.data.message || "Signup failed");
        return;
      }

      const token = res.data.message;
      localStorage.setItem("token", token);
      window.location.href = `http://localhost:5174/dashboard?token=${token}`;
    } catch (error) {
      setErr(error.message);
    }
  };

  const handleLogin = async () => {
    if (!validateFields()) return;

    try {
      const res = await axios.post(
        "http://localhost:3002/user/login",
        {
          email: formData.email,
          password: formData.password,
        },
        {
          validateStatus: () => true,
        }
      );

      if (res.status !== 200) {
        setErr(res.data.message || "Login failed");
        return;
      }

      const token = res.data.message;
      localStorage.setItem("token", token);
      window.location.href = `http://localhost:5174/dashboard?token=${token}`;
    } catch (error) {
      setErr(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <div className="row mt-5 p-5 text-center">
        <Typography variant="h4" gutterBottom>
          {have ? "Login to your Dashboard" : "Register to get your Dashboard"}
        </Typography>
        <Typography variant="subtitle1">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </Typography>
      </div>

      <div className="row mt-3 p-5">
        <div className="col-6">
          <img
            src="/media/images/account_open.svg"
            alt="Open Account Illustration"
          />
        </div>
        <div className="col-1"></div>

        <div className="col-5">
          <Typography variant="h5" gutterBottom>
            {have ? "Login now" : "Signup now"}
          </Typography>
          {err && (
            <Typography color="error" sx={{ mb: 2 }}>
              {err}
            </Typography>
          )}

          {!have && (
            <TextField
              fullWidth
              label="Full Name"
              name="username"
              value={formData.username}
              onChange={handleChange}
              margin="normal"
              required
            />
          )}

          <TextField
            fullWidth
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            required
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            margin="normal"
            required
          />

          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            onClick={have ? handleLogin : handleSignup}
          >
            {have ? "Login" : "Sign Up"}
          </Button>

          <Typography sx={{ mt: 2 }}>
            {have ? (
              <Link
                component="button"
                variant="body2"
                onClick={() => setHave(false)}
              >
                Not Registered Yet?
              </Link>
            ) : (
              <Link
                component="button"
                variant="body2"
                onClick={() => setHave(true)}
              >
                Already Registered?
              </Link>
            )}
          </Typography>
        </div>
      </div>

      <OpenAccount />
    </div>
  );
}

export default Signup;
