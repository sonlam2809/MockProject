import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";
import { Http, Response } from '@angular/http';

import { ShareService } from './share.service';
import { Publisher } from '../model/publisher';


@Injectable()
export class PublisherService {
  private API: string = 'http://localhost:8964/api/Publishers';
  constructor(public http: Http, public share: ShareService) {

  }

  /* get publisher */
  getPublisher(): Observable<Publisher[]> {
    return this.share.get<Publisher>(this.API);
  }

  /* add new publisher */
  postPublisher(publisher: Publisher): Observable<Publisher> {
    console.log(publisher);
    return this.share.post<Publisher>(this.API, publisher);
  }

  /* delete publisher */
  deletePublisher(PubId: string): Observable<Publisher> {
    return this.share.delete<Publisher>(this.API + "/" + PubId);
  }

  /* update publisher */
  updatePublisher(PubId: number, publisher: Publisher): Observable<Publisher> {
    // console.log("ssssssssssssssss" + cate);
    return this.share.update<Publisher>(this.API + "/" + PubId, publisher);
  }

  /* get publisher */
  getPublisherPage(pageNo: number, pagesize: number, lookfor: string) {
    return this.http.get(this.API + "?currentPage=" + pageNo + "&pageSize=" + pagesize + "&lookfor=" + lookfor).map((res: Response) => res.json());
  }

  /* get publisher (Name, ID) */
  getPublisherIDName() {
    return this.share.get<Publisher>(this.API + "/getID_Name");
  }
}
