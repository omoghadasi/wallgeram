import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/service/users.service';
import { comparePassword } from 'src/utils/bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string) {
    const user = await this.usersService.findByUsername(username);
    if (user && comparePassword(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      id: user.id,
      username: user.username,
      email: user.email,
      access_token: this.jwtService.sign(payload),
    };
  }
}
