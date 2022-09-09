const { Router } = require("express");
const { getDb } = require("../controllers/controllersCountries");
const { Country, Activity } = require("../db.js");

const router = Router();

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  let countriesTotal = await getDb();
  if (id) {
    let countryId = await countriesTotal.filter(
      (el) => el.id == id.toUpperCase()
    );
    countryId.length
      ? res.status(200).send(countryId)
      : res.status(404).send("No esta el Pais");
  }
});
module.exports = router;
