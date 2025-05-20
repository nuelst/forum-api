import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';

@Injectable()
export class QuestionsService {
  @Inject()
  private readonly prisma: PrismaService
  async create(createQuestionDto: CreateQuestionDto, userId: string) {
    console.log("user id:", userId)

    return await this.prisma.question.create({
      data: { ...createQuestionDto, userId }

    })
  }

  async findAll() {
    return await this.prisma.question.findMany()
  }

  async findOne(id: string) {
    return await this.prisma.question.findUnique({ where: { id: id } })
  }

  async update(id: string, updateQuestionDto: UpdateQuestionDto) {
    // const userId = "dskln"
    return await this.prisma.question.update({
      where: {
        id: id,
      },
      data: updateQuestionDto

    })
  }

  async remove(id: string) {
    return this.prisma.question.delete({
      where: {
        id: id
      }
    })
  }
}
