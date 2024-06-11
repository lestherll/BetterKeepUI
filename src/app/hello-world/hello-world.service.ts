import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {
  private helloWorldUrl = 'http://localhost:8080/hello';

  constructor(private http: HttpClient) { }


  getHelloWorldMessage(): Observable<string> {
    // the response is plain text, the augular expect json as default
    return this.http.get(this.helloWorldUrl, { responseType: 'text' }).pipe(
      catchError((error) => {
        console.error('An error occurred:', error);
        return ["Backend is DOWN"];
      })
    );
  }
}
