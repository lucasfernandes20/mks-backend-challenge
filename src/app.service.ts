import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  postMovie(): string {
    return 'Hello World!';
  }
}
