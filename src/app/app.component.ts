import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from './services/common/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.router.navigate(['product'], {skipLocationChange: true});
  }

}
