import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegisterComponent } from './components/register/register.component';
import { isAuthGuard } from './guards/is-auth.guard';
import { isNotAuthGuard } from './guards/is-not-auth.guard';
import { leaveGuard } from './guards/leave.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [isAuthGuard]
  },


  {
    path: 'login',
    component: LoginComponent,
    canActivate: [isNotAuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [isNotAuthGuard]
  },

  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [isAuthGuard],
    canDeactivate: [leaveGuard]
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
