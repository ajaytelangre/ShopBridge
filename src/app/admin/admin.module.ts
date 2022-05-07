import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import {ReactiveFormsModule} from '@angular/forms'
import {TableModule} from 'primeng/table';
import { UpdateUserComponent } from './update-user/update-user.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    UpdateUserComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    TableModule
  ]
})
export class AdminModule { }
