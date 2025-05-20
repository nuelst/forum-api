import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  create(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {

    return this.userService.createUser(createUserDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    console.log('findAll');
    return this.userService.users({});
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.user({ id });
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body(new ValidationPipe()) updateUserDto: UpdateUserDto) {
    return this.userService.updateUser({ where: { id }, data: updateUserDto });
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.deleteUser({ id });
  }
}
