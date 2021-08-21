import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UserpageComponent } from './userpage/userpage.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'home', component: HomeComponent },
  {path: 'login', component: RegisterUserComponent},
  {path: 'userpage', component: UserpageComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
