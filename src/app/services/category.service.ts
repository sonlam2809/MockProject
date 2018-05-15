import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Category } from '../model/category';
import "rxjs/add/operator/map";
import { Http, Response } from '@angular/http';

import { ShareService } from './share.service';


@Injectable()
export class CategoryService {
  private API: string = 'http://localhost:8964/api/Categories';
  constructor(public http: Http, public share: ShareService) {

  }

  /* get categories */
  getCategory(): Observable<Category[]> {
    return this.share.get<Category>(this.API);
  }

  /* add new category */
  postCategory(cate: Category): Observable<Category> {
    return this.share.post<Category>(this.API, cate);
  }

  /* delete category */
  deleteCategory(cateId: string): Observable<Category> {
    return this.share.delete<Category>(this.API + "/" + cateId);
  }

  /* update category */
  updateCategory(cateID: number, cate: Category): Observable<Category> {
    // console.log("ssssssssssssssss" + cate);
    return this.share.update<Category>(this.API + "/" + cateID, cate);
  }

  /* get categories */
  getCategoryPage(pageNo: number, pagesize: number, lookfor: string) {
    return this.http.get(this.API + "?currentPage=" + pageNo +"&pageSize=" + pagesize +"&lookfor=" +lookfor).map((res: Response) => res.json());
  }
}
