import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://localhost:44395/api/auth';
  private tokenKey = 'jwtToken';
  private usernameKey = 'username';
  private roleKey = 'role';

  constructor(private http: HttpClient, private router: Router) { }

  login(dto: { username: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, dto).pipe(
      tap(res => {
        localStorage.setItem(this.tokenKey, res.token);
        localStorage.setItem(this.usernameKey, res.username);
        localStorage.setItem(this.roleKey, res.role);
      })
    );
  }

  register(dto: { username: string; password: string; role: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, dto).pipe(
      tap(res => {
        localStorage.setItem(this.tokenKey, res.token);
        localStorage.setItem(this.usernameKey, res.username);
        localStorage.setItem(this.roleKey, res.role);
      })
    );
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.usernameKey);
    localStorage.removeItem(this.roleKey);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getUsername(): string | null {
    return localStorage.getItem(this.usernameKey);
  }

  getRole(): string | null {
    return localStorage.getItem(this.roleKey);
  }
}
