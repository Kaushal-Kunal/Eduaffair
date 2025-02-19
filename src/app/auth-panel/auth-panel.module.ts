import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthPanelRoutingModule } from './auth-panel-routing.module';
import { LoginComponent } from './login/login.component';
import { IonicModule } from '@ionic/angular';
import { EmailVerifyComponent } from './email-verify/email-verify.component';
import { EmailOtpComponent } from './email-otp/email-otp.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgetPwdComponent } from './forget-pwd/forget-pwd.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    EmailVerifyComponent,
    EmailOtpComponent,
    RegistrationComponent,
    ForgetPwdComponent
  ],
  imports: [
    CommonModule,
    AuthPanelRoutingModule,
    IonicModule,
    FormsModule
  ]
})
export class AuthPanelModule { }
