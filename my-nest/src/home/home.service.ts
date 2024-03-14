import { Injectable } from '@nestjs/common';

@Injectable()
export class HomeService {
  findAll() {
    return `This action returns all home`;
  }
}
