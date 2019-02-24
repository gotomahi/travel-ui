import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Transaction} from '../model/transaction';
import {BaseService} from './common/base.service';
import {catchError, map} from 'rxjs/operators';
import {Observable} from 'rxjs/internal/Observable';
import {CookieService} from 'ngx-cookie-service';

@Injectable()
export class AddressService {

  constructor(protected http: HttpClient, private baseService: BaseService) { }

  getLatestExRate(base: string, symbols: string): Observable<HttpEvent<number>> {
    return this.http.get<number>('http://localhost:8083/forex/public/latestExRate/' + base + '/' + symbols, this.baseService.httpOptions());
  }

  findTransactions(criteria: any): Observable<HttpEvent<Transaction[]>> {
    return this.http.post<Transaction[]>('http://localhost:8083/forex/transactions', criteria, this.baseService.httpOptions());
  }

  loadTransaction(transactionId: number): Observable<Transaction> {
    return this.http.get<Transaction>('http://localhost:8083/forex/transaction/' + transactionId);
  }

  saveTransaction(transaction: Transaction): Observable<HttpEvent<Transaction>> {
    return this.http.post<Transaction>('http://localhost:8083/forex/transaction', transaction, this.baseService.httpOptions());
  }

  updateTransaction(transaction: Transaction): Observable<HttpEvent<Transaction>> {
    return this.http.put<Transaction>('http://localhost:8083/forex/transaction', transaction, this.baseService.httpOptions());
  }

  deleteTransaction(transaction: Transaction) {
    return this.http.post('http://localhost:8083/forex/transaction/delete', transaction, this.baseService.httpOptions());
  }

}
