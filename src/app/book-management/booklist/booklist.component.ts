import { Component, OnInit, Inject } from '@angular/core';
import { sampleProducts } from '../../model/products';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy, State } from '@progress/kendo-data-query';
import { Observable } from 'rxjs/Observable';

import { BookService } from '../../services/book.service';
import { Book } from '../../model/book';


@Component({
  selector: 'book-list',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss'],
})
export class BookListComponent implements OnInit {

  public selectedPageSize = 3;
  public subscription: Subscription;
  public book: Book[];
  public _book: Book;

  //kendo grid data
  public gridView: GridDataResult;

  constructor(private router: Router, public bookService: BookService) {
    this._book = new Book();

  }

  ngOnInit() {
    this.loadItems();
  }

  /* on change event combobox */

  onChange(newValue) {
    this.selectedPageSize = newValue;
    console.log("page size: " + this.selectedPageSize);
    // ... do other stuff here ...
    this.loadItems();
  }

  public skip = 0;
  public currentPage = 1;

  public pageChange(event: PageChangeEvent): void {

    this.skip = event.skip;
    this.currentPage = this.skip / this.selectedPageSize + 1;
    this.loadItems();
  }
  private loadItems(): void {
    this.bookService.getBookPage(this.currentPage, this.selectedPageSize, this.searchText).subscribe((x) => {
      this.gridView = {
        data: x["book"],
        total: x["total"]
      }
    });
  }

  /* Search */
  SearchEnter(){
    this.loadItems();
  }

  private searchText = "";

}

