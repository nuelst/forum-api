import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';

@Injectable()
export class AnswersService {
  constructor(private readonly prisma: PrismaService) { }
  async create(createAnswerDto: CreateAnswerDto, userId: string, questionId) {
    return this.prisma.answer.create({
      data: { ...createAnswerDto, userId, questionId }

    })
  }

  async findAll() {
    return await this.prisma.question.findMany()
  }

  async findOne(id: string) {
    return this.prisma.question.findUnique({
      where: {
        id: id
      }
    })
  }

  async update(id: number, updateAnswerDto: UpdateAnswerDto) {
    return `This action updates a #${id} answer`;
  }

  async remove(id: number) {
    return `This action removes a #${id} answer`;
  }
}
