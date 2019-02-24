import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {Transaction} from '../../model/transaction';
import {of} from 'rxjs/internal/observable/of';
import {BaseService} from './base.service';
import {Customer} from '../../model/customer';
import {map} from 'rxjs/operators';

@Injectable()
export class CustomerService {

  constructor(private http: HttpClient, private baseService: BaseService) { }

  findCustomers(firstName: string, lastName: string): Customer[] {
    const customers: Customer[] = [];
    this.http.post('http://localhost:8080/uaa/customers', {}, this.baseService.httpOptions()).subscribe( result => {
      Object.assign(customers, result);
    });
    return customers;
  }

  getCustomerById(customerId: number): Observable<Customer> {
    return this.http.get<Customer>('http://localhost:8080/uaa/customer/' + customerId);
  }

  getCustomer(): Observable<HttpEvent<Customer>> {
    return this.http.get<Customer>('http://localhost:8080/uaa/customer', this.baseService.httpOptions() );
  }

  saveCustomer(customer: Customer): Customer {console.log(customer);
    this.http.post('http://localhost:8080/uaa/customer', customer, this.baseService.httpOptions()).subscribe(result => {
      Object.assign(customer, result);
      });
    return customer;
  }
}
