import { Injectable } from '@nestjs/common';
import { OnlineService } from '../online/online.service';

@Injectable()
export class HomeService {
  constructor(private readonly onlineService: OnlineService) {}

  findAll() {
    return new Array(10).fill(1).map((_, index) => {
      return {
        xid: Math.floor(Math.random() * 11),
        name: `${index}, 数据来自nest服务`,
      };
    });
  }

  async addOnlineUser(userId: string) {
    await this.onlineService.addUser(userId);
  }
  async removeOnlineUser(userId: string) {
    await this.onlineService.removeUser(userId);
  }

  async getOnlineUsers() {
    return await this.onlineService.getOnlineUserCount();
  }
}
