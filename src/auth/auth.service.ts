import { Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Auth } from './auth.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Auth)
    private readonly authRepository: Repository<Auth>,
    private readonly jwtService: JwtService,
  ) {}

  async login(authPayload: AuthPayloadDto) {
    const { username, password } = authPayload;
    const findUser = await this.authRepository.findOne({ where: { username } });
    if (!findUser) {
      return 'User not found';
    }

    if (findUser.password !== password) {
      return 'Password is incorrect';
    }

    const token = this.jwtService.sign({ username });
    return { token };
  }
}
