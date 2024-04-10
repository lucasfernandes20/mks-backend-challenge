import { Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('movie')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async postMovie() {
    return this.appService.postMovie();
  }
}
