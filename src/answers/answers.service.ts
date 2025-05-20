import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';

@Injectable()
export class AnswersService {
  constructor(private readonly prisma: PrismaService) { }
  async create(createAnswerDto: CreateAnswerDto, userId: string, questionId) {


    return await this.prisma.answer.create({
      data: { ...createAnswerDto, questionId, userId }

    })
  }

  async findAll() {
    return await this.prisma.question.findMany()
  }

  async findOne(id: string) {
    return await this.prisma.question.findUnique({
      where: {
        id: id
      }
    })
  }

  async update(id: string, updateAnswerDto: UpdateAnswerDto) {
    return await this.prisma.question.update({
      where: {
        id: id
      },
      data: updateAnswerDto
    })
  }

  async remove(id: string) {
    return this.prisma.question.delete({
      where: { id: id }
    })
  }
}
