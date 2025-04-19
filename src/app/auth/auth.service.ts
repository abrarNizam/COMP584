import { Injectable } from '@angular/core';
import { LoginRequest } from './login-request';
import { Observable } from 'rxjs';
import { LoginResult } from './login-result';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // login(loginRequest: LoginRequest):Observable<LoginResult>{}
}
