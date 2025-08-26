import { Controller, Post } from "@nestjs/common";

@Controller("auth")
export class AuthController {
  @Post("register")
  async register() {
    return "test register";
  }

  @Post("login")
  async login() {
    return "test login";
  }

  @Post("refresh")
  async refresh() {
    return "test refresh";
  }
}
