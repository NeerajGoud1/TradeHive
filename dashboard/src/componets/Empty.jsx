import React from "react";

const Empty = ({ message, buttonText, onButtonClick }) => {
  return (
    <div style={styles.container}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
        alt="Empty"
        style={styles.image}
      />
      <p style={styles.message}>{message}</p>
      <button style={styles.button} onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "80px 20px",
    color: "#999",
  },
  message: {
    fontSize: "18px",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 25px",
    backgroundColor: "#4b5efc",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "15px",
  },
  image: {
    width: "120px",
    opacity: 0.8,
  },
};

export default Empty;
