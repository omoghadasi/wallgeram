import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../typeorm/user.entity';
import { Repository } from 'typeorm';
import { CreateUserParams } from '../utils/types';
import { encodePassword } from 'src/utils/bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  findAll() {
    return this.usersRepository.find();
  }

  findByUsername(username: string) {
    const user = this.usersRepository.findOneBy({ username });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }
    return user;
  }

  createUser(userData: CreateUserParams) {
    const password = encodePassword(userData.password);
    const newUser = this.usersRepository.create({ ...userData, password });
    return this.usersRepository.save(newUser);
  }
}
