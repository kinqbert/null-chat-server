import { Sequelize } from "sequelize";
import { CONFIG } from "src/config/configuration";

const sequelize = new Sequelize(CONFIG.DATABASE_URL, { logging: false });

export default sequelize;
