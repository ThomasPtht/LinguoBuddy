import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:3000/auth';

  constructor(private http: HttpClient, private router: Router) {}

  register(email: string, password: string) {
  return this.http.post<{ access_token: string; user: any }>(
    `${this.apiUrl}/register`,
    { email, password }
  ).pipe(
    tap(res => {
      localStorage.setItem('access_token', res.access_token);
      localStorage.setItem('username', res.user.email); // ← ajoute
    })
  );
}

login(email: string, password: string) {
  return this.http.post<{ access_token: string; user: any }>(
    `${this.apiUrl}/login`,
    { email, password }
  ).pipe(
    tap(res => {
      localStorage.setItem('access_token', res.access_token);
      localStorage.setItem('username', res.user.email); // ← ajoute
    })
  );
}

logout() {
  localStorage.removeItem('access_token');
  localStorage.removeItem('username'); // ← ajoute
  this.router.navigate(['/login']);
}

  getToken() {
    return localStorage.getItem('access_token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  getUsername(): string {
  return localStorage.getItem('username') ?? '';
}
}