import { Injectable } from '@nestjs/common';

@Injectable()
export class HomeService {
  findAll() {
    return new Array(10).fill(1).map((_, index) => {
      return {
        xid: Math.floor(Math.random() * 11),
        name: `${index}, 数据来自nest服务`,
      };
    });
  }
}
