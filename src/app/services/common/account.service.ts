import {BaseService} from './base.service';
import {Injectable} from '@angular/core';
import {DataShareService} from './DataShareService';
import {HttpClient, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';

@Injectable()
export class AccountService {

  constructor(private http: HttpClient, private baseService: BaseService, private dataShareService: DataShareService) { }

  getAccount(): void {
    this.http.get('http://localhost:8001/account?application=FX', this.baseService.httpOptions()).subscribe((result: any) => {
      this.dataShareService.account.next(result);
    });
  }

  saveAccount(data): Observable<HttpEvent<any>> {
    const body = {customer: { firstName: data.firstName, lastName: data.lastName, email: data.email, password: data.password},
      account: {type: data.accountType}};
    return this.http.post<any>('http://localhost:8001/public/account', body, this.baseService.httpOptions());
  }

}
