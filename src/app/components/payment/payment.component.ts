import {Component, HostListener, NgZone, OnInit} from '@angular/core';
import {Transaction} from '../../model/transaction';
import {DataShareService} from '../../services/common/DataShareService';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FavouriteCard} from '../../model/favouritecard';
import {AddressService} from '../../services/address.service';
import {Router} from '@angular/router';
import {ComponentCanDeactivate} from '../can-deactivate/component-can-deactivate';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent extends ComponentCanDeactivate implements OnInit {
  cardNumber: number;
  expiryMonth: number;
  expiryYear: number;
  cvc: number;
  transaction: Transaction;
  paymentDone: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private dataShareService: DataShareService, private transactionService: AddressService,
              private router: Router, private _zone: NgZone) {
    super();
  }

  ngOnInit() {
    this.transaction = this.dataShareService.transaction;
    this.transaction.transferType = 'Bank';
  }

  validateCardNumber(cardNum){

  }

  canDeactivate(): boolean {
      return this.paymentDone.getValue();
  }

  confirm() {
    if (this.transaction.transferType === 'Bank') {

    } else {
      (<any>window).Stripe.card.createToken({
        number: this.cardNumber,
        exp_month: this.expiryMonth,
        exp_year: this.expiryYear,
        cvc: this.cvc
      }, (status: number, response: any) => {
        this._zone.run(() => {
          if (status === 200) {
            this.transaction.token = response.id;
            this.transactionService.saveTransaction(this.transaction).subscribe(
              (result) => {this.router.navigate(['confirm']); }
            );
          } else {
            console.log(response.error.message);
          }
        });
      });
    }
  }


}
