const path = require("path");

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/booking_app/" : "/",
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, "src/"),
      },
    },
  },
};
