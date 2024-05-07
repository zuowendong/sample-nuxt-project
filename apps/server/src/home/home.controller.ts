import { Body, Controller, Get, Post, Sse } from '@nestjs/common';
import { HomeService } from './home.service';
import { Observable } from 'rxjs';
import * as EventEmitter from 'events';

const myEmitter = new EventEmitter();

@Controller('home')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get()
  findAll() {
    return this.homeService.findAll();
  }

  @Sse('sse')
  sendServerMessage(): Observable<MessageEvent> {
    return new Observable<any>((observer) => {
      myEmitter.on('send', (data: number) => {
        observer.next({ data });
      });
    });
  }

  @Post('/addOnline')
  async addOnlineUser(@Body() dto: any) {
    const { userId } = dto;
    const res = await this.homeService.addOnlineUser(userId);
    const count = await this.homeService.getOnlineUsers();
    myEmitter.emit('send', count);
    return res;
  }

  @Post('/deleteOnline')
  async removeOnlineUser(@Body() dto: any) {
    const { userId } = dto;
    const res = await this.homeService.removeOnlineUser(userId);
    const count = await this.homeService.getOnlineUsers();
    myEmitter.emit('send', count);
    return res;
  }

  @Get('/online')
  async getOnlineUsers() {
    return this.homeService.getOnlineUsers();
  }
}
