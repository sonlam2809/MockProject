import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import "rxjs/add/operator/map";
import { Http, Response } from '@angular/http';

import { ShareService } from './share.service';

import { Book } from '../model/book';
import { BookStatus } from '../model/statusbook';

@Injectable()
export class BookService {
  private API: string = 'http://localhost:8964/api/Books';
  constructor(public http: Http, public share: ShareService) {

  }

  /* get Books */
  getBook(): Observable<Book[]> {
    return this.share.get<Book>(this.API);
  }

  /* add new book */
  postBook(book: Book): Observable<Book> {
    return this.share.post<Book>(this.API, book);
  }

  /* delete book */
  deleteBook(bookId: string): Observable<Book> {
    return this.share.delete<Book>(this.API + "/" + bookId);
  }

  /* update book */
  updateBook(bookId: number, book: Book): Observable<Book> {
    // console.log("ssssssssssssssss" + cate);
    return this.share.update<Book>(this.API + "/" + bookId, book);
  }

  /* get book */
  getBookPage(pageNo: number, pagesize: number, lookfor: string) {
    return this.http.get(this.API + "?currentPage=" + pageNo +"&pageSize=" + pagesize +"&lookfor=" +lookfor).map((res: Response) => res.json());
  }

  /* get book status (Status, ID) */
  getBookStatus() {
    return this.share.get<BookStatus>(this.API + "/BookStatus");
  }
}
