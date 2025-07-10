import admin from "firebase-admin";

export const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided!" });
    }

    const idToken = authHeader.split(" ")[1];

    const decodedToken = await admin.auth().verifyIdToken(idToken);

    req.userId = decodedToken.uid;

    req.user = decodedToken;
    console.log("auth succcess");

    next();
  } catch (error) {
    console.error("Firebase Auth Error:", error);
    return res
      .status(401)
      .json({ message: "Unauthorized: Invalid or expired token!" });
  }
};

export const verify = async (req, res) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided!" });
  }

  const idToken = authHeader.split(" ")[1];

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);

    return res.status(200).json({
      message: "Token is valid",
      user: {
        uid: decodedToken.uid,
        email: decodedToken.email,
        emailVerified: decodedToken.email_verified,
        signInProvider: decodedToken.firebase?.sign_in_provider,
      },
    });
  } catch (error) {
    console.error("Token verification error:", error);
    return res.status(401).json({ message: "Invalid or expired token!" });
  }
};
