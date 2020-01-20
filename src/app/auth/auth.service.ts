import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

export const AUTH_TOKEN = 'auth_token';

@Injectable()
export class AuthService {
  token: string;
  private isloggedin: boolean;
  isloggedinsubject = new Subject<boolean>();

  constructor(private router: Router) {
    this.isloggedin = this.isLoggedIn();
    this.token = this.isLoggedIn() ? JSON.parse(localStorage.getItem(AUTH_TOKEN)) : null;
    console.log('token ', this.token);
  }

  onLogin(email: string, password: string) {
    localStorage.setItem(AUTH_TOKEN, JSON.stringify({email, password}));
    this.isloggedin = true;
    this.isloggedinsubject.next(this.isloggedin);
    this.router.navigate(['/user']);
  }

  onLogOut() {
    localStorage.removeItem(AUTH_TOKEN);
    this.isloggedin = false;
    this.isloggedinsubject.next(this.isloggedin);
    this.router.navigate(['']);
  }

  isLoggedIn() {
    return !!localStorage.getItem(AUTH_TOKEN);
  }

  tokenMove() {
    return JSON.parse(localStorage.getItem(AUTH_TOKEN));
  }


}
