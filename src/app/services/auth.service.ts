import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';

@Injectable()
export class AuthService {

  constructor(private userService: UserService) { }
  private redirectUrl: string = '/dashboard';
  private loginUrl: string = '/login';
  private isloggedIn: boolean = false;
  private loggedInUser: User;
  getAllUsers(): Observable<User[]> {
    return this.userService.getUsers();
  }
  isUserAuthenticated(username: string, password: string): Observable<boolean> {
    return this.getAllUsers()
      .map(users => {
        let user = users.find(user => (user.UserName === username) && (user.Password === password));
        if (user) {
          this.isloggedIn = true;
          this.loggedInUser = user;
        } else {
          this.isloggedIn = false;
        }
        return this.isloggedIn;
      });
  }
  isUserLoggedIn(): boolean {
    return this.isloggedIn;
  }
  getRedirectUrl(): string {
    return this.redirectUrl;
  }
  setRedirectUrl(url: string): void {
    this.redirectUrl = url;
  }
  getLoginUrl(): string {
    return this.loginUrl;
  }
  getLoggedInUser(): User {
    return this.loggedInUser;
  }
  logoutUser(): void {
    this.isloggedIn = false;
  }

}
