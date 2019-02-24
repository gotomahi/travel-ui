import {BaseService} from './base.service';
import {HttpClient, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {Injectable} from '@angular/core';

@Injectable()
export class EmailService {

  constructor( private http: HttpClient, private baseService: BaseService) {}

  public sendContactInfo(name, email, query, queryType): Observable<HttpEvent<any>> {
    const body = { 'name': name, 'email': email, 'query': query, 'queryType': queryType, 'recipient': 'mr.mgondi@gmail.com',
      'template': 'FX/contactus', 'loginUrl': 'http://localhost:8083/forex/login',
      'termsUrl': 'http://localhost:8083/forex/terms', 'privacyUrl': 'http://localhost:8083/forex/privacy'};
    return this.http.post<any>('http://localhost:8002/public/email/sendQuery', body, this.baseService.httpOptions());
  }
}
