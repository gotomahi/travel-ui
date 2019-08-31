import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AddressService} from './services/address.service';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {CustomerService} from './services/common/customer.service';
import {CreateCustomerComponent} from './components/create-customer/create-customer.component';
import {ConfirmDialogComponent} from './components/confirm-dialog/confirm-dialog.component';
import {ConfirmService} from './components/confirm-dialog/confirm-service';
import {ConfirmState} from './components/confirm-dialog/confirm-state';
import {SuccessComponent} from './components/success/success.component';
import { LoginComponent } from './components/login/login.component';
import {UserService} from './services/common/user.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {DataShareService} from './services/common/DataShareService';
import {BaseService} from './services/common/base.service';
import {CookieService} from 'ngx-cookie-service';
import { HomeComponent } from './components/home/home.component';
import { PaymentComponent } from './components/payment/payment.component';
import {GeneralService} from './services/common/general.service';
import { ConfirmComponent } from './components/confirm/confirm.component';
import {ComponentCanDeactivate} from './components/can-deactivate/component-can-deactivate';
import {CanDeactivateGuard} from './components/can-deactivate/can-deactivate.guard';
import {AccountService} from './services/common/account.service';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SignupComponent } from './components/signup/signup.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import {EmailService} from './services/common/email.service';
import { HowitworksComponent } from './components/howitworks/howitworks.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import {FooterComponent} from './components/footer/footer.component';

const appRoutes: Routes = [
  {path: 'payment', component: PaymentComponent},
  {path: 'confirm', component: ConfirmComponent},
  {path: 'success/:message', component: SuccessComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'product', component: WelcomeComponent},
  {path: 'contactus', component: ContactusComponent},
  {path: 'howitworks', component: HowitworksComponent},
  {path: 'privacy', component: PrivacyComponent},
  {path: 'legal', component: PrivacyComponent},
  {path: 'terms', component: PrivacyComponent},
  {path: '*', component: PageNotFoundComponent}
];

@NgModule({
  exports: [],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  entryComponents: [LoginComponent, HomeComponent, ConfirmDialogComponent, AppComponent],
  declarations: [PageNotFoundComponent,
    CreateCustomerComponent, ConfirmDialogComponent, SuccessComponent, LoginComponent,
    AppComponent, HeaderComponent, HomeComponent, PaymentComponent, ConfirmComponent,
    WelcomeComponent, SignupComponent, ContactusComponent, HowitworksComponent, PrivacyComponent, FooterComponent],
  bootstrap: [AppComponent],
  providers: [AddressService, CustomerService, ConfirmService, ConfirmState, UserService, DataShareService, BaseService,
    CookieService, GeneralService, AccountService, EmailService]
})
export class TravelModule {
}
