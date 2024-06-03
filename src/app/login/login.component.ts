import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  constructor(private loginService: LoginService) { }

  login() {
    console.log('Login button clicked');
    const redirectUrl = `${window.location.origin}/home`;
    this.loginService.login(redirectUrl).subscribe(
      (responseUrl: string) => {
        console.log('Received response URL:', responseUrl);
        window.location.href = responseUrl;
      },
      (error) => {
        console.error('Login failed', error);
      }
    );
  }
}
