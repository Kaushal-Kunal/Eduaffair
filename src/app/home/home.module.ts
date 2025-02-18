import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { AccountComponent } from './account/account.component';
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [
    HomePage,
    AccountComponent,
    DashboardComponent,
    EmployeeListComponent,
    ProfileComponent
  ]
})
export class HomePageModule { }
