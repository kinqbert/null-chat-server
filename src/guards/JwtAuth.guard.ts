import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Request } from "express";
import jwt, { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";
import { CONFIG } from "src/config/configuration";

@Injectable()
export class JwtAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req: Request = context.switchToHttp().getRequest();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const token = req.cookies["access-token"] as string;

    if (!token) {
      return true;
    }

    try {
      jwt.verify(token, CONFIG.JWT_ACCESS_SECRET) as {
        userId: string;
      };

      return true;
    } catch (err) {
      if (err instanceof TokenExpiredError) {
        throw new UnauthorizedException("Access token expired");
      } else if (err instanceof JsonWebTokenError) {
        throw new UnauthorizedException("Invalid access token");
      } else {
        throw new UnauthorizedException("Token verification failed");
      }
    }
  }
}
