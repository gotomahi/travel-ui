import { Component, OnInit } from '@angular/core';
import {AccountService} from '../../services/common/account.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  accountType: string;
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;

  constructor(private router: Router, private accountService: AccountService) { }

  ngOnInit() {
  }

  register(): void {
    this.accountService.saveAccount({firstName: this.firstName, lastName: this.lastName, email: this.email,
    accountType: this.accountType, password: this.password}).subscribe((result: any) => {
      this.router.navigate(['transaction'], {skipLocationChange: true});
    });
  }

}
