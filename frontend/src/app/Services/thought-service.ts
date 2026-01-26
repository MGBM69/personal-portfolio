import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Thought } from '../model/thought';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThoughtService {
  private apiUrl = `${environment.apiUrl}/thoughts`;
  http = inject(HttpClient);

  //submit thought to backend
  submitThought(thought: Thought): Observable<Thought> {
    return this.http.post<Thought>(this.apiUrl, thought);
  }
  // return thoughts from backend
  getThoughts(): Observable<Thought[]> {
    return this.http.get<Thought[]>(this.apiUrl);
  }
}
