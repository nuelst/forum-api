import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {

  @MinLength(2)
  @MaxLength(50)
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  // @IsAlphanumeric()
  @MinLength(6)
  @IsNotEmpty()
  @MaxLength(32)
  @IsString()
  password: string;
}
