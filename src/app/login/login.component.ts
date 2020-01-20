import {Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../auth/auth.service';
import {AlertService} from '../alert.service';

import {LoginService} from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  admin: boolean;
  log = false;
  constructor(private formBuilder: FormBuilder,
              private authservice: AuthService,
              private router: Router,
              private alertService: AlertService,
              private  loginService: LoginService) {
  }


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: this.formBuilder.control(null, [Validators.required, Validators.email]),
      password: this.formBuilder.control(null, [Validators.required])
    });
    if (this.authservice.isLoggedIn()) {
      this.router.navigate(['/user']);
    }
  }

  onSubmit() {
    const email: string = this.loginForm.value.email;
    const password: string = this.loginForm.value.password;
   this.log= this.loginService.loginCheck(email,password);
    if (!!this.log) {
      this.authservice.onLogin(email, password);
    } else {
      this.alertService.error('Wrong Credentials');
    }
  }
}


