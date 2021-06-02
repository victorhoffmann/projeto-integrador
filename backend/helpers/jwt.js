const { sign, verify } = require("jsonwebtoken");

const secrety = "docinhoDeLeite123";

module.exports = {
  generateToken: (user_id) =>
    sign({}, secrety, {
      subject: `${user_id}`,
      expiresIn: "1h",
    }),
  verifyToken: (token) => verify(token, secrety),
};
