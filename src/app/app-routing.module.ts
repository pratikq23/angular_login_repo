import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './service/auth.service';


import { LoginComponent } from './pages/login-module/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { TeamComponent } from './pages/team/team.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard] 
  }, 
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'team',
    component: TeamComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
