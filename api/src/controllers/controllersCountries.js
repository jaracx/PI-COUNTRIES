const { Country, Activity } = require("../db.js");
const axios = require("axios");

module.exports = {};
async function getAllCountries() {
  const apiAllCountries = await axios.get("https://restcountries.com/v3/all");
  const allCountries = await apiAllCountries.data.map((c) => {
    return {
      id: c.cca3,
      name: c.name.common,
      flag: c.flags[1],
      continent: c.continents[0],
      capital: c.capital != null ? c.capital[0] : "null",
      subregion: c.subregion ? (subregion = c.subregion) : (subregion = "null"),
      area: c.area,
      population: c.population,
    };
  });
  const saveDb = () => {
    allCountries.map((e) => {
      Country.findOrCreate({
        where: {
          name: e.name,
          id: e.id,
          flag: e.flag,
          continent: e.continent,
          capital: e.capital,
          subregion: e.subregion,
          area: e.area,
          population: e.population,
        },
      }).catch((err) => {
        console.log(err);
      });
    });
  };
  saveDb();
  return allCountries;
}
const getDb = async () => {
  await getAllCountries();
  console.log("cargado correctamente");
  const findC = await Country.findAll({
    include: {
      model: Activity,
      attributes: ["name", "difficulty", "duration", "season"],
      through: {
        attributes: [],
      },
    },
  });
  return findC;
};
const getActivities = async () => {
  const findAct = await Activity.findAll();
  return findAct;
};
module.exports = { getDb, getActivities };
