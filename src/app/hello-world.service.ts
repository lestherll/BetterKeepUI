import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {
  private helloWorldUrl = 'https://localhost:8080/hello';

  constructor(private http: HttpClient) { }


  getHelloWorldMessage(): Observable<any> {
    return this.http.get(this.helloWorldUrl);
  }
}
