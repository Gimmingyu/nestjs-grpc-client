import { Transport, ClientOptions } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: 'localhost:50051',
    package: ['wallet', 'user'],
    protoPath: [
      join(__dirname, 'domain/wallet/proto/wallet.proto'),
      join(__dirname, 'domain/user/proto/user.proto'),
    ],
  },
};
