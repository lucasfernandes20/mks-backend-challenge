import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { AuthPayloadDto } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Res() response: Response, @Body() authPayload: AuthPayloadDto) {
    return response.status(200).json(await this.authService.login(authPayload));
  }
}
