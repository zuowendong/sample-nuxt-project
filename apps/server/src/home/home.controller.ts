import { Body, Controller, Get, Post, Sse } from '@nestjs/common';
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

  @Post('/addOnline')
  async addOnlineUser(@Body() dto: any) {
    const { userId } = dto;
    return await this.homeService.addOnlineUser(userId);
  }

  @Get('/online')
  async getOnlineUsers() {
    return this.homeService.getOnlineUsers();
  }
}
