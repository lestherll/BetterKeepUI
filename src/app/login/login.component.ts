import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  login() {
    console.log('Login button clicked');
    const backendLoginUrl = `http://localhost:8080/auth/google?state=${encodeURIComponent(window.location.origin + '/home')}`;
    window.location.href = backendLoginUrl;
  }
}
