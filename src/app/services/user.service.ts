import { Login } from './../models/login.model';

import { environment } from './../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  login(login: Login): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/login`, login).pipe(
      catchError(error => {
        return throwError(error);
      })
    )
  }

  register(login: Login): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/user`, login).pipe(
      catchError(error => {
        return throwError(error);
      })
    )
  }
}
