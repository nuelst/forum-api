
import { Injectable } from '@nestjs/common';
import { Prisma, User } from 'generated/prisma';
import { PrismaService } from '../prisma/prisma.service';

import * as bcrypt from 'bcrypt';


const SALT_OR_ROUNDS = 10;

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) { }

  async user(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async users(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
  // async users(): Promise<User[]> {
  //   return this.prisma.user.findMany();
  // }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {

    const hash = await bcrypt.hash(data.password, SALT_OR_ROUNDS);

    const newUser = await this.prisma.user.create({
      data: { ...data, password: hash },
    });

    return newUser;
  }

  async updateUser(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    const { where, data } = params;
    return this.prisma.user.update({
      data,
      where,

    });
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where,
    });
  }
}
