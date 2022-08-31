const { Country, Activity } = require("../db.js");
const axios = require("axios");

module.exports = {};
async function getAllCountries(req, res, next) {
  try {
    const allCountries = await axios.get("https://restcountries.com/v3/all");
  } catch (error) {}
}
