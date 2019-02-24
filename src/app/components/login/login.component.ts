import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/common/user.service';
import {Route} from '@angular/compiler/src/core';
import {Router} from '@angular/router';
import {DataShareService} from '../../services/common/DataShareService';
import {GeneralService} from '../../services/common/general.service';
import {CustomerService} from '../../services/common/customer.service';
import {Customer} from '../../model/customer';
import {HttpEvent} from '@angular/common/http';
import {AccountService} from '../../services/common/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string;
  password: string;

  constructor(private userService: UserService, private router: Router, private dataShareService: DataShareService,
              private generalService: GeneralService, private customerService: CustomerService,
              private accountService: AccountService) { }

  ngOnInit() {
  }

  authenticate(): void  {
    this.userService.authenticate(this.userName, this.password).subscribe(
      (result: any) => {
            if ( result ) {
              this.dataShareService.isUserLoggedIn.next(true);
              this.dataShareService.token = result.access_token;
              this.generalService.findCountries();
              this.customerService.getCustomer().subscribe( (customer: any) => {
                this.dataShareService.customer.next(customer);
                this.accountService.getAccount();
              });
              this.router.navigate(['home'], {skipLocationChange: true});
            }
          },
      (error) => {console.log(error); }
      );
  }

}
