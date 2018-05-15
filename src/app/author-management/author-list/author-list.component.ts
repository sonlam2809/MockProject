// import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
// import { sampleProducts } from '../../model/products';
// import { Router } from '@angular/router';
// import { AuthorService } from '../../services/Author.service';
// import { Subscription } from 'rxjs/Subscription';
// import { Author } from '../../model/author';

// import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
// import { SortDescriptor, orderBy, State } from '@progress/kendo-data-query';
// import { Observable } from 'rxjs/Observable';






// @Component({
//   selector: 'author-list',
//   templateUrl: './author-list.component.html',
//   styleUrls: ['./author-list.component.scss'],
// })
// export class AuthorListComponent implements OnInit {

//   public selectedPageSize = 3;
//   public subscription: Subscription;
//   public author: Author[];
//   public _author: Author;

//   /* for sorting */
//   public multiple = false;
//   public allowUnsort = true;
//   public sort: SortDescriptor[] = [{
//     field: 'authorName',
//     dir: 'asc'
//   }];

//   /* for paging */
//   // public pageSize = 10;
//   // public skip = 0;

//   //kendo grid data
//   public gridView: GridDataResult;

//   constructor(private router: Router, public authorService: AuthorService) {
//     this._author = new Author();

//   }

//   ngOnInit() {
//     this.loadItems();
//     //this.getall();
//     //this.editService.read();
//   }

//   ngOnDestroy() {
//     if (this.subscription) {
//       this.subscription.unsubscribe();
//     }
//   }

//   /* sortChange event */
//   // public sortChange(sort: SortDescriptor[]): void {
//   //   this.sort = sort;
//   //   this.loadauthorgories(this.author);
//   // }

//   /* get author => gridView*/
//   // private loadauthorgories(_pauthor: author[]): void {
//   //   this.gridView = {
//   //     data: _pauthor,
//   //     total: _pauthor.length
//   //   };
//   // }

//   //-------------------------------
//   public listItems: Array<number> = [
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10
//   ];
//   //-------------------------------

//   /* get all authorgories */
//   // getall() {
//   //   return this.authorService.getauthor().subscribe(x => {
//   //     this.author = x;

//   //     this.loadauthorgories(this.author);
//   //     console.log(x);
//   //   });
//   // }

//   /* click back pop up button */
//   onBackAuthorListClick() {
//     this.router.navigateByUrl("/list-author")
//   }

//   /* add new author */
//   onAddNewAuthor() {
//     this.authorService.postAuthor(this._author).subscribe(x => {
//       alert("Tạo mới tác giả thành công!");
//       this.router.navigateByUrl("/list-author");
//       this.loadItems();
//     });
//   }

//   /* delete a author */
//   onClickDeleteAuthor(authorId: string) {
//     this.authorService.deleteAuthor(authorId).subscribe((x) => {
//       console.log(x);
//       this.loadItems();
//       alert("Xóa tác giả thành công!");
//     });
//   }


//   // public editID: number;
//   // onClickEditauthor(id: number){
//   //   this.editID = id;
//   // }





//   public editDataItem: Author;
//   public isNew: boolean;


//   public addHandler() {
//     this.editDataItem = new Author();
//     this.isNew = true;
//   }

//   public editHandler({ dataItem }) {
//     this.editDataItem = dataItem;
//     this.isNew = false;
//   }

//   public cancelHandler() {
//     this.editDataItem = undefined;
//   }

//   public saveHandler(author: Author) {

//     console.log(author);
//     this.authorService.updateAuthor(this.editDataItem.AuthorID, author).subscribe((data) => {
//       console.log(data);
//     });

//     this.editDataItem = undefined;
//   }

//   public removeHandler({ dataItem }) {
//     //this.authorService.remove(dataItem);
//   }


//   /* on change event combobox */

//   onChange(newValue) {
//     this.selectedPageSize = newValue;
//     console.log("page size: " + this.selectedPageSize);
//     // ... do other stuff here ...
//     this.loadItems();
//   }

//   public skip = 0;
//   public currentPage = 1;

//   public pageChange(event: PageChangeEvent): void {

//     this.skip = event.skip;
//     this.currentPage = this.skip / this.selectedPageSize + 1;
//     // console.log("loonffffffffffffffff " + Math.floor(this.skip / this.selectedPageSize));
//     // console.log("pageChange skip: " + this.skip);

//     // console.log("current page" + this.currentPage);
//     this.loadItems();
//   }
//   private loadItems(): void {

//     this.authorService.getAuthorPage(this.currentPage, this.selectedPageSize, this.searchText).subscribe((x) => {
//       this.gridView = {
//         data: x["author"],
//         total: x["total"]
//       }
//     });
//   }

//   /* Search */
//   SearchEnter(){
//     this.loadItems();
//   }

//   private searchText = "";

// }

