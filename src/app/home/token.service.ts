import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private accessToken: string | null = null;
  private refreshToken: string | null = null;

  constructor(private route: ActivatedRoute) { }

  extractToken(): void {
    this.route.queryParams.subscribe(params => {
      this.accessToken = params['accessToken'] || null;
      this.refreshToken = params['refreshToken'] || null;
    });
  }

  getAccessToken(): string | null {
    return this.accessToken;
  }

  getRefreshToken(): string | null {
    return this.refreshToken;
  }
}
