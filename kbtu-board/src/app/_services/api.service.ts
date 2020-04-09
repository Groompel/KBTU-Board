import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {BEST_TEACHERS, LAST_ADS, USERS} from '../backend-data';
import {environment} from 'src/environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = 'localhost:8000/api';

  constructor(private httpClient: HttpClient) {
  }

  checkTelegramCode(code): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/telegram/code/check`).pipe(map(response => {
      return response;
    }));
  }

  getTelegramCode(): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/telegram/code`).pipe(map(code => {
      return code;
    }));
  }

  getLastAds(number): Observable<any> {
    const res = LAST_ADS;
    return of(res);
  }

  getBestTeachers(number): Observable<any> {
    const res = BEST_TEACHERS;
    return of(res);
  }

  isAvailableUsername(username) {
    const usernames = USERS.map(u => u.name);
    return usernames.includes(username);
  }
}
