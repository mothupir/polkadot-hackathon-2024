import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { WalletService } from './services/wallet.service';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { ToolbarModule } from 'primeng/toolbar';
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { listProviders } from '../types/providers';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, RouterLink, CommonModule, FormsModule, ButtonModule, ToolbarModule, 
    DropdownModule, DialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Lumix';

  connected: boolean | undefined = false;

  visible: boolean = false;

  constructor(private walletService: WalletService, private router: Router) { }

  ngOnInit(): void {
      if (location.href.toLocaleLowerCase().includes('dashboard')) {
        this.showConnectDialog();
      }
  }

  connect() {
    this.connected = this.connected ? false : true;

    if (!this.connected) {
      this.router.navigateByUrl('/home');
    }
  }

  showConnectDialog() {
    this.visible = true;
  }

  loadButtons() {
    const element = document.getElementById("providerButtons") as HTMLElement;
    listProviders(element);
  }

  goToDashboard() {
    this.router.navigateByUrl('/dashboard');
  }

  getYear() {
    return new Date().getFullYear();
  }
}
