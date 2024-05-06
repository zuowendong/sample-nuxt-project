import { Module } from '@nestjs/common';
import { RedisModule } from '@nestjs-modules/ioredis';
import { HomeModule } from '../home/home.module';

@Module({
  imports: [
    HomeModule,
    RedisModule.forRootAsync({
      useFactory: () => ({
        type: 'single',
        url: 'redis://127.0.0.1:6378',
      }),
    }),
  ],
})
export class AppModule {}
