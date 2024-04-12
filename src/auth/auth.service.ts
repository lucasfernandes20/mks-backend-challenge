import { ConflictException, Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Auth } from './auth.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Auth)
    private readonly authRepository: Repository<Auth>,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(authPayload: AuthPayloadDto) {
    const { username, password } = authPayload;
    const user = await this.authRepository.findOne({ where: { username } });
    if (!user) {
      return null;
    }
    const isPasswordValid = await compare(password, user.password);
    if (!isPasswordValid) {
      return null;
    }

    const token = this.jwtService.sign({ username });
    return { token };
  }

  async registerUser(authPayload: AuthPayloadDto) {
    const { username, password } = authPayload;
    const findUser = await this.authRepository.findOne({ where: { username } });
    if (findUser) {
      throw new ConflictException('Nome de usuário já está em uso.');
    }
    const hashedPassword = await hash(password, 10);
    const newUser = await this.authRepository.save({
      username,
      password: hashedPassword,
    });

    const token = this.jwtService.sign({ newUser });
    return { token };
  }
}
