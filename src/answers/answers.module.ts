import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AnswersController } from './answers.controller';
import { AnswersService } from './answers.service';

@Module({
  controllers: [AnswersController],
  providers: [AnswersService],
  imports: [PrismaModule]
})
export class AnswersModule { }
