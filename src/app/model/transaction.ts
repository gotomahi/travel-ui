import {Recipient} from './recipient';
import {Country} from './country';

export class Transaction {
  id: number;
  recipient: Recipient;
  reference: string;
  transferAmount: number;
  recieveAmount: number;
  exRate: number;
  transferFee: number;
  initiateDate: Date;
  status: string;
  srcCountry: Country;
  desCountry: Country;
  transferType: string;
  token: string;
}
