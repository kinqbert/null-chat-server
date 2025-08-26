/* eslint-disable no-console */
import sequelize from "src/db/sequelize";

export const loadSequelize = async () => {
  try {
    await sequelize.authenticate();
    console.log("DB connection has been established successfully.");
    await sequelize.sync({ alter: true });
    console.log("DB has been synced successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
