import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from '../dtos/CreateUser.dto';
import { UsersService } from '../service/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get()
  findAll() {
    return [];
  }

  @Post('create')
  createUser(@Body() userData: CreateUserDto) {
    return this.userService.createUser(userData);
  }
}
