import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {Country} from '../../model/country';
import {of} from 'rxjs/internal/observable/of';
import {BaseService} from './base.service';
import {DataShareService} from './DataShareService';

@Injectable()
export class GeneralService {

  constructor(private http: HttpClient, private baseService: BaseService, private dataShareService: DataShareService) { }

  findCountries(): Observable<HttpEvent<Country[]>> {
    return this.http.get<Country[]>('http://localhost:8083/forex/public/countries', this.baseService.httpOptions());
  }
}
