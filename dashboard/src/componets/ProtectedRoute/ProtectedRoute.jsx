import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function get() {
      try {
        const params = new URLSearchParams(window.location.search);
        let token = params.get("token");
        if (!token) token = localStorage.getItem("token");
        else localStorage.setItem("token", token);

        if (!token) {
          setAuthenticated(false);
          return;
        }

        const res = await axios.get("http://localhost:3002/api/verify", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.status === 200) {
          setAuthenticated(true);
        } else {
          setAuthenticated(false);
        }
      } catch (e) {
        console.log(e.message);
      }
    }
    get();
  }, []);

  if (authenticated === null) return <div>Loading...</div>;
  if (authenticated === false) {
    window.location.href = "http://localhost:5173/signup";
    return null;
  }
  return children;
};

export default ProtectedRoute;
