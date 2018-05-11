import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class ShareService {

  //private  headers;
  constructor(private http: Http) {
    //this.headers  =  new  Headers({  'Content-Type':  'application/json'  });
  }

  //get data
  get<T>(api: string):  Observable<T[]> {
    return  this.http.get(api).map((res:  Response)  =>  res.json());
  }

  //add new data

  post<T>(api: string, object: T): Observable<T> {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   })};


      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

    return this.http.post(api, JSON.stringify(object), options)
      .map((res:  Response)  =>  res.json());
  }

}
