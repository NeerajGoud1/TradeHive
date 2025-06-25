import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setAuthenticated(false);
      return;
    }

    axios
      .get("/api/verify", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => setAuthenticated(true))
      .catch(() => setAuthenticated(false));
  }, []);

  if (authenticated === null) return <div>Loading...</div>; // or spinner
  if (authenticated === false) return <Navigate to="/login" replace />;
  return children;
};

export default ProtectedRoute;
