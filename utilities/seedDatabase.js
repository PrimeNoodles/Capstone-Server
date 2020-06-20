const { User } = require('../database/models');

const seedDatabase = async () => {
  await Promise.all([
    User.create({
      userName: "Kyrie",
      password: "Irving",
    }),
    User.create({
      userName: "LeBron",
      password: "James",
    }),
    User.create({
      userName: "Luka",
      password: "Doncic",
    })
  ]);
}

module.exports = seedDatabase;
