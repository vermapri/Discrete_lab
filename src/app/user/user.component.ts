import { Component, OnInit, } from '@angular/core';
import {CanComponentDeactive} from './anonmous-guard.service';
import {Observable } from 'rxjs';
import {AuthService} from '../auth/auth.service';

import {Users} from '../usersData';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],

})
export class UserComponent implements CanComponentDeactive, OnInit {
  users :{email: string, details: {name: string, password: string, role: string}}[]=[];
  details: { admin: boolean, name: string } = this.loginService.loginDetails();

  constructor(private authService: AuthService, private loginService: LoginService) {
  }



  ngOnInit() {
    this.details = this.loginService.loginDetails();
    let b = Users.forEach(a => {
      if(this.details.name!=a.details.name){
         this.users.push(a);
        console.log(this.details.name,a);
      }

    });
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    return !this.authService.isLoggedIn();
  }



}
