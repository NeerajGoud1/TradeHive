import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { app } from "./Firebase";
import { useNavigate } from "react-router-dom";
const auth = getAuth(app);

function verifyEmail() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const [checking, setChecking] = useState(false);

  useEffect(() => {
    const interval = setInterval(async () => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        setChecking(true);
        await currentUser.reload();
        if (currentUser.emailVerified) {
          console.log("User verified!");
          setUser(currentUser);
          clearInterval(interval); // stop polling
          let token = localStorage.getItem("token");
          window.location.href = `https://trade-hive-dashboard.vercel.app?token=${token}`;
        }
        setChecking(false);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [navigate]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div
      className="container mt-5 mb-5 "
      style={{ height: "100vh", textAlign: "center" }}
    >
      <div className="row">
        {!user && (
          <>
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">
              Verify Your Email
            </h1>
            <p className="text-gray-700 mb-2">
              We have sent a verification link to your email address.
            </p>
            <p className="text-gray-700 mb-2">
              If you haven't find the email, Please checkout <b>spam folder</b>
            </p>
            <p className="text-gray-500 mb-4">
              If you haven’t received the email, please check your email and
              password.
            </p>
            {checking ? (
              <p className="text-blue-600 font-medium">
                Checking verification status...
              </p>
            ) : (
              <p className="text-gray-500">You will be redirected..</p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
export default verifyEmail;
