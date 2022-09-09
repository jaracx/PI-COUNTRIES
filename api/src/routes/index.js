const { Router } = require("express");
const router = Router();

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countryRouter = require("./countryRoutes.js");
const activityRouter = require("./activityRoutes.js");
//const aRouter = require("./Activity.js");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/countries", countryRouter);
//router.use("/activity", activityRouter);
router.get("/", (req, res) => {
  res.send("<h1>hello world</h1>");
});

module.exports = router;
