import { Body, Controller, Post, Res } from "@nestjs/common";
import { Response } from "express";
import { CookieKey } from "src/constants";

import { RegisterDto } from "./auth.dto";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("register")
  async register(@Body() registerDto: RegisterDto, @Res({ passthrough: true }) res: Response) {
    const { accessToken } = await this.authService.register(registerDto);

    res.cookie(CookieKey.AccessToken, accessToken, { httpOnly: true }).status(200);
  }

  @Post("login")
  async login() {
    return "test login";
  }

  @Post("refresh")
  async refresh() {
    return "test refresh";
  }

  @Post("logout")
  async logout() {
    return "test logout";
  }
}
