import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { LAST_ADS, BEST_TEACHERS } from './backend-data';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'localhost:8000/api';

  constructor(
    private httpClient: HttpClient,
  ) { }

  getLastAds(number): Observable<any> {
    const res = LAST_ADS;
    return of(res);
  }

  getBestTeachers(number): Observable<any> {
    const res = BEST_TEACHERS;
    return of(res);
  }


}
