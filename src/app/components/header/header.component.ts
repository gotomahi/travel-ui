import { Component, OnInit } from '@angular/core';
import {DataShareService} from '../../services/common/DataShareService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedIn: boolean;

  constructor(private dataShareService: DataShareService) {
    dataShareService.isUserLoggedIn.subscribe(
        value => this.loggedIn = value
    );
  }

  ngOnInit() {
  }

}
