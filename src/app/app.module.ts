import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {LoginComponent} from './login/login.component';
import {HeaderComponent} from './header/header.component';
import {ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {AuthService} from './auth/auth.service';
import {AuthGuard} from './auth-guard.service';
import {CanDeactivateGuard} from './user/anonmous-guard.service';

import {HttpClientModule} from '@angular/common/http';
import {AlertService} from './alert.service';
import {MatSnackBarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginService} from './login.service';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'user', canActivate: [AuthGuard], canDeactivate: [CanDeactivateGuard], component: UserComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    UserComponent
  ],

  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),


  ],
  providers: [AuthService, AuthGuard, CanDeactivateGuard, AlertService ,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
