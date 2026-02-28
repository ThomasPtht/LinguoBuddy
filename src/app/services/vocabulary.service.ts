// vocabulary.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// On définit une interface pour typer la réponse
export interface VocabularyStats {
  total: number;
  new: number;
  learning: number;
  mastered: number;
}

@Injectable({
  providedIn: 'root'
})
export class VocabularyApiService {
  private readonly apiUrl = 'http://localhost:3000/vocabulary'; 

  constructor(private http: HttpClient) {}

  getStats(): Observable<VocabularyStats> {
    return this.http.get<VocabularyStats>(`${this.apiUrl}/stats`);
  }
}