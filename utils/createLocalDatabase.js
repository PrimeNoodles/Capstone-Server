const pgtools = require("pgtools");

const config = {
    user: "postgres",
    host: "localhost",
    port: 5432,
    password: process.env.LOCAL_DATABASE_PASSWORD,
};

const databaseName = require("./databaseName");

//Callback catch error
const cb = (err, res) => {
    console.log(`Creating database: ${databaseName}`);

    if (err) {
        console.error(err);
        process.exit(-1);
    }

    console.log(res);
    console.log(`Created database: ${databaseName}`);
}

const createLocalDatabase = () => pgtools.createdb(config, databaseName, cb);

module.exports = createLocalDatabase;