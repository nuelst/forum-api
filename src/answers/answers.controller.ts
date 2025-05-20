import { Body, Controller, Delete, Get, Param, Patch, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { AnswersService } from './answers.service';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';

@Controller('answers')
export class AnswersController {
  constructor(private readonly answersService: AnswersService) { }

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createAnswerDto: CreateAnswerDto, @Request() req) {
    return this.answersService.create(createAnswerDto, req.sub);
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.answersService.findAll();
  }
  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.answersService.findOne(+id);
  }
  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnswerDto: UpdateAnswerDto) {
    return this.answersService.update(+id, updateAnswerDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.answersService.remove(+id);
  }
}
