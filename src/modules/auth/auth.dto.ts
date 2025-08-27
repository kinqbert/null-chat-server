import { IsEmail, IsNotEmpty, Matches, MinLength } from "class-validator";

export class RegisterDto {
  @IsEmail(undefined, { message: "Please enter a valid email address" })
  email: string;

  @IsNotEmpty({ message: "Password is required" })
  @MinLength(8, { message: "Password must be at least 8 characters long" })
  @Matches(/(?=.*[A-Z])/, {
    message: "Password must contain an uppercase letter",
  })
  @Matches(/(?=.*[a-z])/, {
    message: "Password must contain a lowercase letter",
  })
  @Matches(/(?=.*\d)/, { message: "Password must contain a number" })
  password: string;
}
