import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { QuestionsModule } from './questions/questions.module';

@Module({
  imports: [AuthModule, UserModule, PrismaModule, QuestionsModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule { }
