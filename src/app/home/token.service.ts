import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private loginSuccess: boolean = false;
  private errorMessage: string | null = null;
  private accessToken: string | null = null;
  private refreshToken: string | null = null;

  constructor(private route: ActivatedRoute) {}

  extractTokens(): void {
    this.route.queryParams.subscribe((params) => {
      const status = params['status'] || null;
      this.loginSuccess = status === 'success';
      this.accessToken = params['accessToken'] || null;
      this.refreshToken = params['refreshToken'] || null;
      this.errorMessage = params['description'] || null;
    });
  }

  getAccessToken(): string | null {
    return this.accessToken;
  }

  getRefreshToken(): string | null {
    return this.refreshToken;
  }

  getErrorMessage(): string | null {
    return this.errorMessage;
  }

  isLoginSuccess(): boolean {
    return this.loginSuccess;
  }
}
