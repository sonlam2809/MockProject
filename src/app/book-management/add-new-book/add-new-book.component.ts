import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BookService } from '../../services/book.service';
import { Book } from '../../model/book';
import { CategoryService } from '../../services/category.service';
import { AuthorService } from '../../services/author.service';
import { PublisherService } from '../../services/publisher.service';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { error } from 'util';

@Component({
  selector: 'app-add-new-book',
  templateUrl: './add-new-book.component.html',
  styleUrls: ['./add-new-book.component.scss']
})
export class AddNewBookComponent implements OnInit {

  public listCategory: Array<string>;
  public listAuthor: Array<string>;
  public listPublisher: Array<string>;
  public listBookStatus: Array<string>;

  public imgUrl: string = "http://placehold.it/500";
  public fileToUpload: File = null;
  public isOnFileChange: boolean = false;

  public _book: Book;

  public _listEditBook: GridDataResult;

  constructor(
    private router: Router,
    private bookService: BookService,
    private cateService: CategoryService,
    private authorService: AuthorService,
    private publisherService: PublisherService,
  ) 
  { 
    this._book = new Book();
    //this._listEditBook = bo
  }

  ngOnInit() {
    this.loadCategoryDropDown();
    this.loadAuthorDropDown();
    this.loadPublisherDropDown();
    this.loadBookStatusDropDown();
  }
  OnBackClick() {
    this.router.navigateByUrl("/list-book");
  }

  /* Hien thi dropdown Category */
  loadCategoryDropDown() {
    this.cateService.getCategoryIDName().subscribe((x) => {
      this.listCategory = x["cateInfo"];
    });
  }

  /* Hien thi dropdown Category */
  loadAuthorDropDown() {
    this.authorService.getAuthorIDName().subscribe((x) => {
      this.listAuthor = x["authorInfo"];
    });
  }

  /* Hien thi dropdown Publisher */
  loadPublisherDropDown() {
    this.publisherService.getPublisherIDName().subscribe((x) => {
      this.listPublisher = x["publisherInfo"];
    });
  }

  /* Hien thi dropdown Publisher */
  loadBookStatusDropDown() {
    this.bookService.getBookStatus().subscribe((x) => {
      this.listBookStatus = x["BookStatusInfo"];
    });
  }


  handleInputFile(file: FileList){
    console.log(Date.toString());
    this.fileToUpload = file.item(0);
    this._book.ImgUrl = "http://localhost:8964/Image/" + this.fileToUpload.name ;
    //Show image preview
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imgUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
    //console.log(this.imgUrl);
  }


  OnSubmit(Image){
    ///console.log("Nhay vao ham nay Doneeeeeeeeeeeee");
    this.bookService.postFile(this.fileToUpload).subscribe((x)=>{
      //Image.value = null;
      this.imgUrl = "http://placehold.it/500";
    });
  }

  /* add new book */
  onAddNewBook() {
    if(this.isOnFileChange == false){
      this._book.ImgUrl = this.imgUrl;
    }
    this.bookService.postBook(this._book).subscribe(x => {
      alert("Thêm mới sách thành công!");
      this.router.navigateByUrl("/list-book");
    },
    error => {
      alert("Thêm mới sách thất bại!");
      this.router.navigateByUrl("/list-book");
    }
  );
  }

  // testaa(){
  //   console.log(this._book.CateID);
  // }
  onFileChange(e) {
    this.isOnFileChange = true;
  }

}
