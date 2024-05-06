import { Module } from '@nestjs/common';
import { HomeService } from './home.service';
import { HomeController } from './home.controller';
import { OnlineModule } from '../online/online.module';

@Module({
  imports: [OnlineModule],
  controllers: [HomeController],
  providers: [HomeService],
})
export class HomeModule {}
