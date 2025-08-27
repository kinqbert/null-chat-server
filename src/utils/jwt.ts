import jwt from "jsonwebtoken";
import { CONFIG } from "src/config/configuration";

export function generateAccessToken(payload: any) {
  return jwt.sign(payload, CONFIG.JWT_ACCESS_SECRET, {
    expiresIn: "1h",
  });
}

export function generateRefreshToken(payload: any) {
  return jwt.sign(payload, CONFIG.JWT_REFRESH_SECRET, {
    expiresIn: "7d",
  });
}
