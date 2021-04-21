import { HttpClient } from '@angular/common/http';
import { Person } from './../models/person.model';
import { catchError } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private httpClient: HttpClient) { }

  getPeople(search: string, startDate: string, endDate: string): Observable<any> {
    const params = { search: search, startDate: startDate, endDate: endDate }
    return this.httpClient.get(`${environment.apiUrl}/profiles`, { params: params })
      .pipe(
        catchError(error => {
          return error;
        })
      );
  }

  savePeople(person: Person): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/profile`, person).pipe(
      catchError(error => {
        return error;
      })
    );
  }


  getPerson(id: string): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/profile/${id}`).pipe(
      catchError(error => {
        return error;
      })
    );
  }

  updatePeople(person: Person): Observable<any> {
    return this.httpClient.put(`${environment.apiUrl}/profile/${person._id}`, person).pipe(
      catchError(error => {
        return error;
      })
    );
  }

  deletePeople(id: string): Observable<any> {

    return this.httpClient.delete(`${environment.apiUrl}/profile/${id}`).pipe(
      catchError(error => {
        return error;
      })
    );
  }

}
