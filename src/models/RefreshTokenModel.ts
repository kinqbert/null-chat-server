import { DataTypes, Model } from "sequelize";

import sequelize from "../db/sequelize";
import { UserModel } from "./UserModel";

export interface RefreshTokenAttributes {
  token: string;
  userId: string;
}

export type RefreshTokenCreationAttributes = RefreshTokenAttributes;

export class RefreshTokenModel
  extends Model<RefreshTokenAttributes, RefreshTokenCreationAttributes>
  implements RefreshTokenAttributes
{
  declare token: string;
  declare userId: any;
}

RefreshTokenModel.init(
  {
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      references: {
        model: UserModel,
        key: "id",
      },
      onDelete: "CASCADE",
    },
    token: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "refresh_tokens",
    modelName: "RefreshTokens",
    timestamps: false,
  },
);
