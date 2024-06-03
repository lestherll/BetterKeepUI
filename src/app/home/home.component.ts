import { Component, OnInit } from '@angular/core';
import { TokenService } from './token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  accessToken: string | null = null;
  refreshToken: string | null = null;

  constructor(private tokenService: TokenService) { }

  ngOnInit() {
    this.tokenService.extractToken();
    this.accessToken = this.tokenService.getAccessToken();
    this.refreshToken = this.tokenService.getRefreshToken();
  }
}
