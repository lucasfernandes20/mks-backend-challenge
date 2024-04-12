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
import { AuthPayloadDto, TokenDto, TokenStatusDto } from './auth.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalGuard)
  @ApiOkResponse({
    description: 'Usuário logado com sucesso',
    type: TokenDto,
  })
  async login(@Res() response: Response, @Req() request: Request) {
    return response.status(201).json(request.user);
  }

  @Get('status')
  @UseGuards(JwtGuard)
  @ApiOkResponse({
    description: 'Usuário logado com sucesso',
    type: TokenStatusDto,
  })
  async status(@Res() response: Response, @Req() req: Request) {
    return response.status(201).json(req.user);
  }

  @Post('register')
  @ApiOkResponse({
    description: 'Usuário registrado com sucesso',
    type: TokenDto,
  })
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
