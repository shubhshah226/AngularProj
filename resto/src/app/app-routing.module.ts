import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddRestoComponent} from './add-resto/add-resto.component';
import{ListRestoComponent} from './list-resto/list-resto.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {UpdateRestoComponent} from './update-resto/update-resto.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UsershowlistComponent } from './usershowlist/usershowlist.component';
import { AdminaddrestoComponent } from './adminaddresto/adminaddresto.component';
const routes: Routes = [
  {
    component:AddRestoComponent,
    path:'add'
  },
  {
    component:LoginComponent,
    path:'login'
  },
  {
    component:UpdateRestoComponent,
    path:'update/:id'
  },
  {
    component:ListRestoComponent,
    path:'list'
  },
  {
    component:AdminloginComponent,
    path:'adminlogin'
  },
  {
    component:UsershowlistComponent,
    path:'userlist'
  },
  {
    component:AdminaddrestoComponent,
    path:'adminaddresto'
  },

  {
    component:RegisterComponent,
    path:''
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
