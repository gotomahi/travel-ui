import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpParams} from '@angular/common/http';
import {BaseService} from './base.service';
import {Observable} from 'rxjs/internal/Observable';
import {Buffer} from 'buffer';

@Injectable()
export class UserService {

  constructor(private http: HttpClient, private baseService: BaseService) { }

  authenticate(username: string, password: string): Observable<string> {
    return this.http.post<string>('http://localhost:8083/forex/login',
      'username=mahendra&password=password',
      {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
  }
}
