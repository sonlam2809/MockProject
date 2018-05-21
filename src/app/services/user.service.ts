import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ShareService } from './share.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../model/user';
import "rxjs/add/operator/map";

@Injectable()
export class UserService {

  private API: string = 'http://localhost:8964/api/Users';
  constructor(public http: Http, public share: ShareService) { 

  }

  /* get Users */
  getUsers(): Observable<User[]>{
    return this.http.get(this.API).map((res: Response) => res.json());
  }
}
