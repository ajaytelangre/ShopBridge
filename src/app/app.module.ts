import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module'
import {HttpClientModule} from '@angular/common/http' ;
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; 
import {TableModule} from 'primeng/table';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import { TooltipModule } from 'ngx-bootstrap/tooltip';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TableModule,
    FontAwesomeModule,
    TooltipModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
