import {Injectable} from '@angular/core';
import {Users} from './usersData';
import {AuthService} from './auth/auth.service';

@Injectable()
export class LoginService {
  admin: boolean;
  log:boolean;
  name: string;
  token:string;

  constructor(private authService: AuthService){

  }

  loginCheck(email, password) {
    this.log=false;
     Users.forEach(a => {
      if (a.email === email && a.details.password === password) {
        this.admin = a.details.role === 'admin';
        this.log = true;
        this.name = a.details.name;
      }
    });
    return this.log;

  }

  loginDetails(){
    this.token=this.authService.tokenMove();
    this.loginCheck(this.token['email'],this.token['password']);
    return {admin: this.admin, name: this.name}
  }

}
