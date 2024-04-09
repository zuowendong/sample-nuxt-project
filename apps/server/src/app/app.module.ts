import { Module } from '@nestjs/common';
import { HomeModule } from '../home/home.module';
import { EventsModule } from '../events/events.module';
import { WebsocketModule } from '../websocket/websocket.module';

@Module({
  imports: [HomeModule, EventsModule, WebsocketModule],
})
export class AppModule {}
