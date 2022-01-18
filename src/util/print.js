const dotenv = require("dotenv");
dotenv.config();
const print = (message, ...optionalParams) => {
  if (process.env.NODE_ENV === "development") {
    console.log(message, ...optionalParams);
  }
};
module.exports = print;
