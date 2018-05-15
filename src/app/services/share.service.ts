import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()
export class ShareService {

  constructor(private http: Http) {

  }

  /* get data */
  get<T>(api: string): Observable<T[]> {
    return this.http.get(api).map((res: Response) => res.json());
  }

  /* Add new data */
  post<T>(api: string, object: T): Observable<T> {

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

  /* Update entity */
  update<T>(api: string, object: T): Observable<T> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    // console.log(api);
    // console.log(object);

    return  this.http.put(api, JSON.stringify(object), options)
      .map((res:  Response)  =>  res.json());
  }


}
