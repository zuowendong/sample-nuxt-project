import { Module } from '@nestjs/common';
import { HomeModule } from '../home/home.module';
import { EventsModule } from '../events/events.module';

@Module({
  imports: [HomeModule, EventsModule],
})
export class AppModule {}
