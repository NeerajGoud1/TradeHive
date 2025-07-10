import React, { useState, useEffect } from "react";
import OpenAccount from "../OpenAccount";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { TextField, Button, Typography, Link } from "@mui/material";
import { ProLink } from "../../ProLink";

//ver

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut,
} from "firebase/auth";

import { app } from "../../FIrebaseAuth/Firebase";

function Signup() {
  const auth = getAuth(app);
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
  const navigate = useNavigate();
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

  const CreateUserWithEmailAndPass = async () => {
    if (!validateFields()) return;
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const token = res.user.accessToken;
      localStorage.setItem("token", token);
      await sendEmailVerification(res.user);
      console.log("Verification email sent.");
      navigate("/verify");
    } catch (e) {
      console.log("error : ", e.message);
      const code = e.message.split("(")[1].split(")")[0];
      const readable = code
        .replace("auth/", "")
        .replace(/-/g, " ")
        .replace(/^\w/, (c) => c.toUpperCase());
      setErr(readable);
    }
  };

  const signInWithEmailAndPass = async () => {
    if (!validateFields()) return;
    try {
      const res = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      let token = res.user.accessToken;
      localStorage.setItem("token", token);
      window.location.href = `https://trade-hive-dashboard.vercel.app?token=${token}`;
    } catch (e) {
      console.log("error : ", e.message);
      const code = e.message.split("(")[1].split(")")[0];
      const readable = code
        .replace("auth/", "")
        .replace(/-/g, " ")
        .replace(/^\w/, (c) => c.toUpperCase());
      setErr(readable);
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
            onClick={have ? signInWithEmailAndPass : CreateUserWithEmailAndPass}
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
