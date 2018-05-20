import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public user: User;

  constructor() { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if(form != null)
      form.reset();
    this.user = {
      UserName: '',
      Password: '',
      Email: '',
      IsActive: true,
      ConfirmPassword: ''
    }
  }
}
