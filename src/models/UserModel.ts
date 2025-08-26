import { DataTypes, Model, Optional } from "sequelize";

import sequelize from "../db/sequelize";

export interface UserAttributes {
  id: string;
  email: string;
  password: string;
  isVerified: boolean;
  registeredAt: Date;
}

export type UserCreationAttributes = Optional<UserAttributes, "id" | "isVerified" | "registeredAt">;

export class UserModel
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  declare id: string;
  declare email: string;
  declare password: string;
  declare isVerified: boolean;
  declare registeredAt: Date;
}

UserModel.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    isVerified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    registeredAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: "users",
    modelName: "User",
    timestamps: false,
  },
);
