;

import { Inject, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';


import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Prisma } from 'generated/prisma';

const SALT_OR_ROUNDS = 10;

type AuthResponse = {
  access_token: string
}
@Injectable()
export class AuthService {

  // constructor(private readonly usersService: UserService) { }
  @Inject()
  private readonly usersService: UserService
  @Inject()
  private readonly jwtService: JwtService

  async signIn(params: Prisma.UserCreateInput): Promise<AuthResponse> {
    const existingUser = await this.usersService.user({ email: params.email });
    if (!existingUser) throw new NotFoundException("User not found!");
    const passwordMatch = await bcrypt.compare(params.password, existingUser.password)
    if (!passwordMatch) throw new UnauthorizedException("Invalid Credentials")

    const { password, ...user } = existingUser

    const payload = { sub: user.id };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
    // return result
  }
  // create(createAuthDto: CreateAuthDto) {
  //   return 'This action adds a new auth';
  // }

  // findAll() {
  //   return `This action returns all auth`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} auth`;
  // }

  // update(id: number, updateAuthDto: UpdateAuthDto) {
  //   return `This action updates a #${id} auth`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} auth`;
  // }
}
