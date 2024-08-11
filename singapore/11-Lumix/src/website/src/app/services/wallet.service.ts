import { Injectable, NgZone } from '@angular/core';
import { ethers } from 'ethers';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  private provider: ethers.BrowserProvider | undefined;
  private signer: any;
  private address: string | undefined;

  connected: boolean = false;

  constructor(private ngZone: NgZone) { }

  async connectWallet() {
    
  }
}
