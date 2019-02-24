import { Component, OnInit } from '@angular/core';
import {GeneralService} from '../../services/common/general.service';
import {Router} from '@angular/router';
import {DataShareService} from '../../services/common/DataShareService';
import {AddressService} from '../../services/address.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  sendAmount: number;
  recieveAmount: number;

  constructor(protected router: Router, protected dataShareService: DataShareService,
              protected transactionService: AddressService, protected generalService: GeneralService) {
  }

  ngOnInit() {
  }

  public startTransfer(): void {
    this.router.navigate(['signup'], {skipLocationChange: true});
  }

}
