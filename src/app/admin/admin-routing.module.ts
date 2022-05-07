import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {UpdateUserComponent} from './update-user/update-user.component';
import {AddItemComponent} from './add-item/add-item.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'update', component:UpdateUserComponent},
  {path:'add',component:AddItemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
