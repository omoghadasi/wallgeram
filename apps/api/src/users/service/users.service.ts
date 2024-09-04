import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../typeorm/user.entity';
import { Repository } from 'typeorm';
import { CreateUserParams } from '../utils/types';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  createUser(userData: CreateUserParams) {
    const newUser = this.usersRepository.create({ ...userData });
    return this.usersRepository.save(newUser);
  }
}
