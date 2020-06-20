var express = require("express");
var router = express.Router();

// Subrouters;
const usersRouter = require("./users");
const animeTopsRouter = require("./animeTops");
const animeNewsRouter = require("./animeNews");
const animeGenActionsRouter = require("./animeGenActions");
const animeGenComedysRouter = require("./animeGenComedys");
const animeGenHorrorsRouter = require("./animeGenHorrors");
const animeGenRomancesRouter = require("./animeGenRomances");

// Mount our subrouters to assemble our apiRouter;

router.use("/users", usersRouter);
router.use("/animeTops", animeTopsRouter);
router.use("/animeNews", animeNewsRouter);
router.use("/animeGenActions", animeGenActionsRouter);
router.use("/animeGenComedys", animeGenComedysRouter);
router.use("/animeGenHorrors", animeGenHorrorsRouter);
router.use("/animeGenRomances", animeGenRomancesRouter);

// Error handling middleware;
router.use((req, res, next) => {
  const error = new Error("Not Found, Please Check URL!");
  error.status = 404;
  next(error);
});

// Export our apiRouter, so that it can be used by our main app in app.js;
module.exports = router;
