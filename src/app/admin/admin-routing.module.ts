import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {UpdateUserComponent} from './update-user/update-user.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'update', component:UpdateUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
