import { Component, OnInit } from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../services/common/customer.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customer: Customer = new Customer();

  constructor(private customerService: CustomerService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  saveCustomer(): void{
    this.customer.status = 'Active';
    this.customer.createdDate = new Date();
    this.customer.email = '';
    this.customer = this.customerService.saveCustomer(this.customer);
  }

}
