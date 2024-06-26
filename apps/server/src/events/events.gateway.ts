import {
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

import { OnlineService } from '../online/online.service';

@WebSocketGateway({
  cors: {
    /**
     * 允许的前端地址，这里要注意配置跨域问题
     */
    origin: 'http://localhost:3000',
  },
})
export class EventGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;
  constructor(private readonly onlineService: OnlineService) {}

  async getOnlineUsers() {
    const { count } = await this.onlineService.getOnlineUserCount();
    this.server.emit('onlineUsers', count);
  }

  async afterInit() {
    this.server.on('connection', () => {
      this.getOnlineUsers();
    });
  }

  handleConnection(@ConnectedSocket() client: Socket) {
    const userId = client.handshake.headers['user-id'] as string;
    if (!userId) return;
    this.onlineService.addUser(userId);
    this.getOnlineUsers();
  }

  handleDisconnect(@ConnectedSocket() client: Socket) {
    const userId = client.handshake.headers['user-id'] as string;
    if (!userId) return;
    this.onlineService.removeUser(userId);
    this.getOnlineUsers();
  }
}
