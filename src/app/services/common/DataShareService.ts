import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';
import {Transaction} from '../../model/transaction';
import {Country} from '../../model/country';
import {Customer} from '../../model/customer';

@Injectable()
export class DataShareService {
  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public deactivate: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public transaction: Transaction = new Transaction();
  public token: string = null;
  public countries: BehaviorSubject<Country[]> = new BehaviorSubject<Country[]>([]);
  public customer: BehaviorSubject<Customer> = new BehaviorSubject<Customer>(null);
  public account: BehaviorSubject<Account> = new BehaviorSubject<Account>(null);

  public getCountry(code): Country {
    let result: Country = null;
    for (const country of this.countries.getValue()) {
      if (country.countryCode === code) {
        result = country;
      }
    }
    return result;
  }
}
