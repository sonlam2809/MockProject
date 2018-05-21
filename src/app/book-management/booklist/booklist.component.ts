import { Component, OnInit, Inject } from '@angular/core';
import { sampleProducts } from '../../model/products';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy, State } from '@progress/kendo-data-query';
import { Observable } from 'rxjs/Observable';

import { BookService } from '../../services/book.service';
import { Book } from '../../model/book';
import { ShareDataService } from '../../services/share-data.service';


@Component({
  selector: 'book-list',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss'],
})
export class BookListComponent implements OnInit {

  public selectedPageSize = 5;
  public itemNumber: Array<number> = new Array<number>(3, 5, 10, 15);
  public subscription: Subscription;
  public book: Book[];
  public _book: Book;

  public loading: boolean;


  //kendo grid data
  public gridView: GridDataResult;

  constructor(private router: Router, public bookService: BookService, private shareDataService: ShareDataService) {
    this._book = new Book();
  }

  ngOnInit() {
    this.loadItems();
  }

  /* on change event combobox */
  onChange(newValue) {
    this.selectedPageSize = newValue;
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
    this.loading = true;
    this.bookService.getBookPage(this.currentPage, this.selectedPageSize, this.searchText).subscribe((x) => {
      this.gridView = {
        data: x["book"],
        total: x["total"]
      },
      this.loading = false;
    });
  }

  /* Search */
  SearchEnter() {
    this.loadItems();
  }

  private searchText = "";

  /* Edit Book */
  public editDataItem: Book;
  public isNew: boolean;
  public editHandler({ dataItem }) {
    //console.log(dataItem);
    //this.editDataItem = dataItem;
    this.shareDataService.book = dataItem;
    this.isNew = false;
    this.router.navigateByUrl("/edit-book");
    //console.log("cai con c"+this.editDataItem.Title);
    //console.log("this.sharedataservice........"+this.shareDataService.book.PubID);
  }

  public removeHandler({ dataItem }){
    console.log("Removed book: "+ dataItem.BookID);
    console.log("Removed book: "+ dataItem);
    this.bookService.removeBook(dataItem.BookID, dataItem).subscribe((x)=>{
      alert("Xóa sách thành công!");
      this.loadItems();
      this.router.navigateByUrl("/list-book");
    });
  }


}

