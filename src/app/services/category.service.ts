import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Category } from '../model/category';
import  "rxjs/add/operator/map";
import { Http, Response } from '@angular/http';

import { ShareService } from './share.service';


@Injectable()
export class CategoryService {
  private API: string = 'http://localhost:8964/api/Categories';
  constructor(public http: Http, public share: ShareService) {

  }

  getCategory(): Observable<Category[]> {
    return this.share.get<Category>(this.API);
  }

  postCategory(cate: Category): Observable<Category>{
    return this.share.post<Category>(this.API, cate);
  }




}
