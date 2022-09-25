import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ReadPostComponent } from './pages/read-post/read-post.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

const routes: Routes = [
  {path:"",children:[
    {path:"",component:HomeComponent},
    {path:"readPost/:id",component:ReadPostComponent}
  ]},
  {path:"user" , children:[
    {path:"login",component:LogInComponent},
    {path:"signup", component:SignUpComponent},
    {path:"profile/:id",component:ProfileComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
