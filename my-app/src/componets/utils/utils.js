import React from "react";

const isAuthenticated = () => {
  const token = sessionStorage.getItem("token");
  console.log(token);

  return token && token.length > 10;
};
export default isAuthenticated;
