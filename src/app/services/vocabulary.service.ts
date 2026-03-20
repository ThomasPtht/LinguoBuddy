import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

export interface VocabularyStats {
  total: number;
  new: number;
  learning: number;
  mastered: number;
}

@Injectable({ providedIn: 'root' })
export class VocabularyService {
  private apiUrl = '/api/vocabulary'; 

  constructor(private http: HttpClient) {}

  getStats(): Promise<VocabularyStats> {
    return firstValueFrom(this.http.get<VocabularyStats>(`${this.apiUrl}/stats`));
  }

  create(data: any) {
    return firstValueFrom(this.http.post<any>(this.apiUrl, data));
  }

  getAll(): Promise<any[]> {
    return firstValueFrom(this.http.get<any[]>(this.apiUrl));
  }
}