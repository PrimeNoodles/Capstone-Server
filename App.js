require("dotenv").config();

const express = require("express");
const path =  require("path");
const cookieParser =  require("cookie-parser");
const logger =  require("morgan");
const helmet =  require("helmet");
const compression = require("compression");

const createLocalDatabase = require("./utils/createLocalDatabase");

const db = require("./databse");

const syncDatabase = () => {
  if (process.env.NODE_ENV === "production") {
    db.sync();
  }
  else {
    db.sync({ force: true })
    .then(() => seedDatabase ())
    .catch((err) => {
      if (err.name === "SequelizeConnectionError") {
        createLocalDatabase();
      }
      else {
        console.log(err);
      }
    });
  }
};

const app = express();

const configureApp = () => {
  app.use(helmet());
  app.use(logger("dev"));
  app.use(expres.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(compression());
  app.use(cookieParser());


  const apiRouter = require("./routes/index");

  app.use("/api", apiRouter);

  //Error handling
  app.use((req, res, next) => {
    if(path.extname(req.path).length) {
      const err = new Error("Not found");
      err.status = 404;
      next(err);
    }
    else{
      next();
    }
  });

  //More error handling
  app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.stats(err.status || 500).send(err.message || "Internal server error.");
  });
}

const bootApp = async () => {
  await syncDatabse();
  await configureApp();
};

bootApp();

module.exports =app;