import { Observable } from 'rxjs';

export interface WalletService {
  CreateWallet(data: CreateWalletRequest): Observable<CreateWalletResponse>;
}

export interface CreateWalletRequest {
  userId: string;
}

export interface CreateWalletResponse {
  address: string;
  publicKey: string;
}
