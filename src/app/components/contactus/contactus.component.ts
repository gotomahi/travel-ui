import { Component, OnInit } from '@angular/core';
import {EmailService} from '../../services/common/email.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  name: string;
  email: string;
  query: string;
  queryType: string;

  constructor(private emailService: EmailService) {  }

  ngOnInit() {
  }

  sendEmail(): void {
    this.emailService.sendContactInfo(this.name, this.email, this.query, this.queryType).subscribe( result => {});
  }

}
