import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BookService } from '../../services/book.service';
import { Book } from '../../model/book';
import { CategoryService } from '../../services/category.service';
import { AuthorService } from '../../services/author.service';
import { PublisherService } from '../../services/publisher.service';


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

  public _book: Book;

  constructor(
    private router: Router,
    private bookService: BookService,
    private cateService: CategoryService,
    private authorService: AuthorService,
    private publisherService: PublisherService,
  ) 
  { 
    this._book = new Book();
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
    this.fileToUpload = file.item(0);
    this._book.ImgUrl = "/" + this.fileToUpload.name;
    //Show image preview
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imgUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
    //console.log(this.imgUrl);
  }


  OnSubmit(Image){
    this.bookService.postFile(this.fileToUpload).subscribe((x)=>{
      console.log("Doneeeeeeeeeeeee");
      Image.value = null;
      this.imgUrl = "http://placehold.it/500";
    });
  }

  /* add new book */
  onAddNewBook() {
    this.bookService.postBook(this._book).subscribe(x => {
      alert("Thêm mới sách thành công!");
      this.router.navigateByUrl("/add-new-book");
    });
  }

  // testaa(){
  //   console.log(this._book.CateID);
  // }


}
