import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmailVerifyComponent } from './email-verify/email-verify.component';
import { EmailOtpComponent } from './email-otp/email-otp.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgetPwdComponent } from './forget-pwd/forget-pwd.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'email-verify',component:EmailVerifyComponent},
  {path:'email-otp',component:EmailOtpComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'forget-pwd',component:ForgetPwdComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthPanelRoutingModule { }
