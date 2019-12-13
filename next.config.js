const dotEnvResult = require("dotenv").config();

const withCSS = require("@zeit/next-css");
module.exports = withCSS({
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN
  }
});
