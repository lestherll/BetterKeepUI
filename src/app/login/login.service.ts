import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(private http: HttpClient) {}

  login(redirectUrl: string): Observable<string> {
    const url = `http://localhost:8080/auth/google?state=${encodeURIComponent(redirectUrl)}`;
    console.log('Sending login request to:', url);
    return this.http.get(url, { responseType: 'text' });
  }
}
