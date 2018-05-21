import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../model/user';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public listUser: User[];

  public checkUser: User;

  constructor(public urlRouter:Router, public userService: UserService) { 

    this.checkUser = new User();
  }

  ngOnInit() {
    this.userService.getUsers().subscribe((x)=>{
      //console.log(x);
      this.listUser = x;
    });
    console.log(this.listUser);
  }
  public Login()
  {
    for(let i = 0; i< this.listUser.length; i++)
    {
      if(this.listUser[i].UserName == this.checkUser.UserName && this.listUser[i].Password == this.checkUser.Password)
      {
        this.urlRouter.navigate(['/dashboard']);
      }
      
    }
    
    

  }

}
