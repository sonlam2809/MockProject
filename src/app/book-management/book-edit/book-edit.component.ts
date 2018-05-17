import { Component, OnInit } from '@angular/core';
import { Book } from '../../model/book';
import { ShareDataService } from '../../services/share-data.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { CategoryService } from '../../services/category.service';
import { AuthorService } from '../../services/author.service';
import { PublisherService } from '../../services/publisher.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {

  public bookEdit: Book;
  public myform: FormGroup;
  public newbook: Book;

  public listCategory: Array<string>;
  public listAuthor: Array<string>;
  public listPublisher: Array<string>;
  public listBookStatus: Array<string>;

  public imgUrl: string = "http://placehold.it/500";
  public fileToUpload: File = null;

  constructor(
    private sharedataService: ShareDataService, 
    private formBuilder: FormBuilder,
    private router: Router,
    private bookService: BookService,
    private cateService: CategoryService,
    private authorService: AuthorService,
    private publisherService: PublisherService,
  ) 
  {
    this.bookEdit = new Book();
    this.newbook = new Book();
    

  }

  ngOnInit() {
    this.bookEdit = this.sharedataService.book;
    //console.log("Book edit" + this.bookEdit);
    this.myform = new FormGroup({
      Title: new FormControl(this.bookEdit.Title, Validators.required),
      Summary: new FormControl(this.bookEdit.Summary, Validators.required),

      CategoryID: new FormControl(this.bookEdit.CateID, Validators.required),
      AuthorID: new FormControl(this.bookEdit.AuthorID, Validators.required),
      PublisherID: new FormControl(this.bookEdit.PubID, Validators.required),
      Price: new FormControl(this.bookEdit.Price, Validators.required),
      Quantity: new FormControl(this.bookEdit.Quantity, Validators.required),
      BookStatusID: new FormControl(this.bookEdit.BookStatusID, Validators.required)
    });

    console.log(this.myform.value);
    //this.myform.reset();

    this.loadCategoryDropDown();
    this.loadAuthorDropDown();
    this.loadPublisherDropDown();
    this.loadBookStatusDropDown();
  }
  onSubmit(): void {
    console.log("xxx");
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

  OnBackClick(){
    this.router.navigateByUrl("/list-book");
  }

  handleInputFile(file: FileList){
    console.log(Date.toString());
    this.fileToUpload = file.item(0);
    this.newbook.ImgUrl = "http://localhost:8964/Image/" + this.fileToUpload.name ;
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

}
