import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { LocalGuard } from './guards/local.guard';
import { JwtGuard } from './guards/jwt.guard';
import { AuthPayloadDto } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalGuard)
  async login(@Res() response: Response, @Req() request: Request) {
    return response.status(201).json(request.user);
  }

  @Get('status')
  @UseGuards(JwtGuard)
  async status(@Req() req: Request) {
    req.user;
  }

  @Post('register')
  async register(
    @Res() response: Response,
    @Body() authPayload: AuthPayloadDto,
  ) {
    try {
      const newUser = await this.authService.registerUser(authPayload);
      return response.status(201).json(newUser);
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  }
}
