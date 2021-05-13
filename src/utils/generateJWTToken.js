import jwt from "jsonwebtoken";

const generateJWTToken = (id) => {
  return jwt.sign({ userId: id }, "thisisasecret", {
    expiresIn: "1 day",
  });
};

export default generateJWTToken;
