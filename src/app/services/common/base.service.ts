import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs/internal/Observable';
import {Transaction} from '../../model/transaction';
import {of} from 'rxjs/internal/observable/of';
import {CookieService} from 'ngx-cookie-service';
import {DataShareService} from './DataShareService';

@Injectable()
export class BaseService {

  constructor ( private dataShareService: DataShareService, private cookieService: CookieService ) {}

  public handleError(error: HttpErrorResponse)  {
    const errMsg = error.message ? error.message : 'Server error';
    return Observable.throw(errMsg);
  }

  public httpOptions(): any {
    const customerId = this.dataShareService.customer.getValue();
    if ( this.dataShareService.token ) {
      return {headers: {'Authorization': 'Bearer ' + this.dataShareService.token}};
    }else {
      return {headers: {}};
    }
  }

}
