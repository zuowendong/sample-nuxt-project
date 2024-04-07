import { Controller, Get, Sse } from '@nestjs/common';
import { HomeService } from './home.service';
import { Observable, interval, map } from 'rxjs';

@Controller('home')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get()
  findAll() {
    return this.homeService.findAll();
  }

  @Sse('sse')
  sendServerMessage(): Observable<any> {
    return interval(1000).pipe(map(() => ({ data: { hello: 'world' } })));
  }
}
