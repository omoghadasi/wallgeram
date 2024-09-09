import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/service/users.service';
import { comparePassword } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(username: string, password: string) {
    const user = await this.usersService.findByUsername(username);
    if (user && comparePassword(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
