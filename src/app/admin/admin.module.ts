import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import {ReactiveFormsModule} from '@angular/forms'
import {TableModule} from 'primeng/table';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AddItemComponent } from './add-item/add-item.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { TooltipModule } from 'ngx-bootstrap/tooltip';




@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    UpdateUserComponent,
    AddItemComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    TableModule,
    FontAwesomeModule,
    TooltipModule.forRoot()
   
    
  ]
})
export class AdminModule { }
