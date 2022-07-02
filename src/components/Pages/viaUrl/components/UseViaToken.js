import { useState } from "react";

export default function useViaToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem("viaToken");
    const userToken = JSON.parse(tokenString);

    return userToken;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    localStorage.setItem("viaToken", JSON.stringify(userToken));

    setToken(userToken);
  };

  return {
    setToken: saveToken,
    token,
  };
}
