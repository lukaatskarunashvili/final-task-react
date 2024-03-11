import jwt_decode from "jwt-decode";

export const decodToken = (token) => {
  return jwt_decode(token);
};
export const toggleStorage = (token) => {
  if (token) {
    localStorage.setItem("accessToken", token);
  } else {
    localStorage.removeItem("accessToken");
  }
};

export const validateToken = (token) => {
  const data = decodToken(token);
  const curentDate = new Date();
  return data.exp > curentDate / 1000;
};
