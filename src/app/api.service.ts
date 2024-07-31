import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PasswordRequest } from './model/passwordRequest';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl: string = "http://localhost:8080/api/validate-password";

  constructor(private http: HttpClient) { }

  validatePassword(body: PasswordRequest): Observable<any> {
    return this.http.post(this.apiUrl, body);
  }
}
