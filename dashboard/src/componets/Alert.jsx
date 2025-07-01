import React from "react";

export const SuccessAlert = ({ message }) => {
  return <div className="success-alert">{message}</div>;
};

export const FailAlert = ({ message }) => {
  return <div className="fail-alert">{message}</div>;
};
