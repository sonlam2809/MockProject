import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";
import { Http, Response } from '@angular/http';

import { ShareService } from './share.service';
import { Author } from '../model/author';


@Injectable()
export class AuthorService {
  private API: string = 'http://localhost:8964/api/Authors';
  constructor(public http: Http, public share: ShareService) {

  }

  /* get author */
  getAuthor(): Observable<Author[]> {
    return this.share.get<Author>(this.API);
  }

  /* add new author */
  postAuthor(author: Author): Observable<Author> {
    console.log(author);
    return this.share.post<Author>(this.API, author);
  }

  /* delete author */
  deleteAuthor(authorId: string): Observable<Author> {
    return this.share.delete<Author>(this.API + "/" + authorId);
  }

  /* update author */
  updateAuthor(authorID: number, author: Author): Observable<Author> {
    // console.log("ssssssssssssssss" + cate);
    return this.share.update<Author>(this.API + "/" + authorID, author);
  }

  /* get authors */
  getAuthorPage(pageNo: number, pagesize: number, lookfor: string) {
    return this.http.get(this.API + "?currentPage=" + pageNo + "&pageSize=" + pagesize + "&lookfor=" + lookfor).map((res: Response) => res.json());
  }

  /* get author (Name, ID) */
  getAuthorIDName() {
    return this.share.get<Author>(this.API + "/getID_Name");
  }
}
