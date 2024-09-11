import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from '../dtos/CreateUser.dto';
import { UsersService } from '../service/users.service';
import { JwtAuthGuard } from 'src/auth/guard/jwt.guard';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get()
  getUsers() {
    return this.userService.findAll();
  }

  @Get('username/:username')
  getUserByUsername(@Param('username') username: string) {
    const user = this.userService.findByUsername(username);
    if (!user)
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    else return user;
  }

  @Post('create')
  createUser(@Body() userData: CreateUserDto) {
    return this.userService.createUser(userData);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req) {
    return req.user;
  }
}
