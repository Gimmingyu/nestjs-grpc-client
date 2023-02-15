import { Controller, Get, OnModuleInit, Post } from '@nestjs/common';
import { ClientGrpc, Client } from '@nestjs/microservices';
import { grpcClientOptions } from 'grpc-wallet.client';
import { UserService } from './interface/user.interface';

@Controller('user')
export class UserController implements OnModuleInit {
  @Client(grpcClientOptions) private readonly client: ClientGrpc;

  private userService: UserService;

  onModuleInit() {
    this.userService = this.client.getService<UserService>('UserService');
  }

  @Get()
  greetUser() {
    return this.userService.GreetUser({ name: 'primrose' });
  }
}
