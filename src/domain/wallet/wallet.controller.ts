import { Controller, Get, OnModuleInit } from '@nestjs/common';
import {
  GrpcMethod,
  ClientGrpc,
  Client,
  Transport,
} from '@nestjs/microservices';
import { grpcClientOptions } from 'grpc-wallet.client';
import { Observable } from 'rxjs';
import { WalletService } from './interface/wallet.interface';

@Controller('wallet')
export class WalletController implements OnModuleInit {
  @Client(grpcClientOptions) private readonly client: ClientGrpc;

  private walletService: WalletService;

  onModuleInit() {
    this.walletService = this.client.getService<WalletService>('WalletService');
  }

  @Get()
  createWallet() {
    return this.walletService.CreateWallet({ userId: '1' });
  }
}
