import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../model/user';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  invalidCredentialMsg: string;

  ngOnInit(){

  }
  
  constructor(private authService: AuthService, private router: Router) {
  }
  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  onFormSubmit() {
    let uname = this.loginForm.get('username').value;
    let pwd = this.loginForm.get('password').value;
    this.authService.isUserAuthenticated(uname, pwd).subscribe(
      authenticated => {
        if (authenticated) {
          let url = this.authService.getRedirectUrl();
          console.log('Redirect Url:' + url);
          this.router.navigate([url]);
        } else {
          this.invalidCredentialMsg = 'Invalid Credentials. Try again.';
        }
      }
    );
  }

}
