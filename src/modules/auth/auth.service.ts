import { ConflictException, Injectable } from "@nestjs/common";
import { hash } from "bcrypt";
import { RefreshTokenModel, UserModel } from "src/models";
import { generateAccessToken, generateRefreshToken } from "src/utils";

import { RegisterDto } from "./auth.dto";

@Injectable()
export class AuthService {
  async register(registerDto: RegisterDto) {
    const { email, password } = registerDto;

    const existingUser = await UserModel.findOne({
      where: { email },
      attributes: ["id"],
      raw: true,
    });

    if (existingUser) {
      throw new ConflictException("User with such email already exists.");
    }

    const hashedPassword = await hash(password, 10);

    const user = await UserModel.create({ email, password: hashedPassword });

    const payload = { userId: user.id };
    const accessToken = generateAccessToken(payload);
    const refreshToken = generateRefreshToken(payload);

    void RefreshTokenModel.create({ token: refreshToken, userId: user.id });

    return { accessToken };
  }
}
