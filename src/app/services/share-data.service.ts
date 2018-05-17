import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Book } from '../model/book';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ShareDataService {

  public book: Book = new Book();  
  
  constructor() { 
  
  }

  
}
