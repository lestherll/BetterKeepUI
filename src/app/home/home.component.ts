import { Component, OnInit } from '@angular/core';
import { TokenService } from './token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  loginSuccess: boolean = false;
  accessToken: string | null = null;
  refreshToken: string | null = null;
  errorMessage: string | null = null;

  constructor(private tokenService: TokenService) { }

  ngOnInit() {
    this.tokenService.extractTokens();
    this.loginSuccess = this.tokenService.isLoginSuccess();
    this.accessToken = this.tokenService.getAccessToken();
    this.refreshToken = this.tokenService.getRefreshToken();
    this.errorMessage = this.tokenService.getErrorMessage();
  }
}
