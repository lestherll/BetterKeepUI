import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { randomInt } from 'crypto';
import { Observable } from 'rxjs';
import { Note } from '../shared/types';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private notesUrl = 'http://localhost:8080/notes';

  constructor(private http: HttpClient) {}

  getAllNotes(): Observable<any> {
    const urlToSend: string = this.urlBuilder(this.notesUrl, 'all');
    return this.http.get(urlToSend, { responseType: 'json' });
  }

  getNoteByID(id: string): Observable<any> {
    const urlToSend: string = this.urlBuilder(this.notesUrl, id);
    return this.http.get(urlToSend, { responseType: 'json' });
  }

  urlBuilder(...parts: string[]): string {
    if (parts.length === 1) return parts[0] + '/';
    return parts.join('/');
  }
}
