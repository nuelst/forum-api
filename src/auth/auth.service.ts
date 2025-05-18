;

import { Inject, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';


import * as bcrypt from 'bcrypt';
import { Prisma, User } from 'generated/prisma';


const SALT_OR_ROUNDS = 10;

@Injectable()
export class AuthService {

  // constructor(private readonly usersService: UserService) { }
  @Inject()
  private readonly usersService: UserService
  async signIn(params: Prisma.UserCreateInput): Promise<Omit<User, 'password'>> {
    const user = await this.usersService.user({ email: params.email });
    if (!user) throw new NotFoundException("User not found!");
    const passwordMatch = await bcrypt.compare(params.password, user.password)
    if (!passwordMatch) throw new UnauthorizedException("Invalid Credentials")

    const { password, ...result } = user
    return result
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
