import { Injectable } from '@nestjs/common';
import { CreateWalletDto } from './dtos/create-wallet.dto';
import { UpdateWalletDto } from './dtos/update-wallet.dto';
import { Wallet } from './models/wallet.model';

@Injectable()
export class WalletService {
  private wallets: Wallet[] = [];

  create(createWalletDto: CreateWalletDto): Wallet {
    const newWallet = { id: this.wallets.length + 1, ...createWalletDto };
    this.wallets.push(newWallet);
    return newWallet;
  }

  findAll(): Wallet[] {
    return this.wallets;
  }

  findOne(id: number): Wallet | undefined {
    return this.wallets.find(wallet => wallet.id === id);
  }

  update(id: number, updateWalletDto: UpdateWalletDto): Wallet | undefined {
    const walletIndex = this.wallets.findIndex(wallet => wallet.id === id);
    if (walletIndex === -1) return undefined;

    this.wallets[walletIndex] = { ...this.wallets[walletIndex], ...updateWalletDto };
    return this.wallets[walletIndex];
  }

  remove(id: number): boolean {
    const walletIndex = this.wallets.findIndex(wallet => wallet.id === id);
    if (walletIndex === -1) return false;

    this.wallets.splice(walletIndex, 1);
    return true;
  }
}
