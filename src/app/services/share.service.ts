import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()
export class ShareService {

  //private  headers;
  constructor(private http: Http) {
    //this.headers  =  new  Headers({  'Content-Type':  'application/json'  });
  }

  /* get data */
  get<T>(api: string): Observable<T[]> {
    return this.http.get(api).map((res: Response) => res.json());
  }

  /* Add new data */
  post<T>(api: string, object: T): Observable<T> {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   })};

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(api, JSON.stringify(object), options)
      .map((res: Response) => res.json());
  }

  /* Delete data by id */
  delete<T>(api: string): Observable<T> {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.delete(api, options)
      .map((res: Response) => res.json());
  }

  /* Get data by id */
  getById<T>(api: string): Observable<T>{
    return this.http.get(api).map((res: Response) => res.json());
  }

  /* Update entity */
  update<T>(api: string, object: T): Observable<T>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(api,JSON.stringify(object), options)
    .map((res: Response) => res.json());
  }
}
