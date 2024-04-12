import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class AuthPayloadDto {
  @ApiProperty({ example: 'john_doe', description: 'Nome de usuário.' })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({ example: '123456', description: 'Senha.' })
  @IsString()
  @IsNotEmpty()
  password: string;
}

export class TokenDto {
  @ApiProperty({
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
    description: 'Token JWT.',
  })
  token: string;
}

export class TokenStatusDto {
  @ApiProperty({
    example: 'john_doe',
    description: 'Nome de usuário.',
  })
  username: string;
  @ApiProperty({
    example: 1712927525,
    description: 'Data de criação do token.',
  })
  iat: number;

  @ApiProperty({
    example: 1712927525,
    description: 'Data de expiração do token.',
  })
  exp: number;
}
