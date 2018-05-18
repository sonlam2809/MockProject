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

  public listCategory: Array<string>;
  public listAuthor: Array<string>;
  public listPublisher: Array<string>;
  public listBookStatus: Array<string>;

  public previewImageUrl: string = "http://placehold.it/500";
  public fileToUpload: File = null;

  private isOnFileChange: boolean;

  constructor(
    private sharedataService: ShareDataService,
    private formBuilder: FormBuilder,
    private router: Router,
    private bookService: BookService,
    private cateService: CategoryService,
    private authorService: AuthorService,
    private publisherService: PublisherService,
  ) {
    this.bookEdit = new Book();
  }

  ngOnInit() {
    this.loadCategoryDropDown();
    this.loadAuthorDropDown();
    this.loadPublisherDropDown();
    this.loadBookStatusDropDown();

    console.log('book share');
    console.log(this.sharedataService.book);
    this.bookEdit = this.sharedataService.book;
    //console.log("Book edit" + this.bookEdit);

    console.log('book edit');
    console.log(this.bookEdit);


    //thay the previewImage get tu server
    this.previewImageUrl = this.bookEdit.ImgUrl;
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

  OnBackClick() {
    this.router.navigateByUrl("/list-book");
  }

  handleInputFile(file: FileList) {
    console.log(Date.toString());
    this.fileToUpload = file.item(0);

    //link hinh moi de gui len server
    this.previewImageUrl = "http://localhost:8964/Image/" + this.fileToUpload.name;

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.previewImageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }
  onEditBook() {
    if (typeof this.previewImageUrl !== 'undefined' && this.previewImageUrl) {
      this.bookEdit.ImgUrl = "http://localhost:8964/Image/" + this.fileToUpload.name;
    }
    this.bookService.updateBook(this.bookEdit.BookID, this.bookEdit).subscribe((x) => {
      alert("Cập nhật thành công");
    });
  }

  /* submit edit book */
  OnSubmit(Image) {
    if (this.isOnFileChange) {
      console.log(this.previewImageUrl);
      this.bookEdit.ImgUrl = this.previewImageUrl;
      this.bookService.postFile(this.fileToUpload).subscribe((x) => {
        //console.log("Doneeeeeeeeeeeee");
        Image.value = null;
        this.previewImageUrl = "http://placehold.it/500";
      });
      this.router.navigateByUrl("/list-book");
    }

  }

  onFileChange(e) {
    this.isOnFileChange = true;
  }

}
