import {Component, OnInit, OnDestroy} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth/auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private isloggedin: boolean = this.authservice.isLoggedIn();
  subscription: Subscription;

  constructor(private authservice: AuthService) {
  }

  ngOnInit() {
    this.subscription = this.authservice.isloggedinsubject.subscribe((isloggedin: boolean) => {
      this.isloggedin = isloggedin;
    });
  }

  logOut() {
    this.authservice.onLogOut();
  }

  isLoggedIn() {
    return this.isloggedin;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
