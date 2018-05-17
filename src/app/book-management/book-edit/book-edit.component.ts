import { Component, OnInit } from '@angular/core';
import { Book } from '../../model/book';
import { ShareDataService } from '../../services/share-data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {

  public myform: FormGroup = new FormGroup({
    'Title':  new  FormControl('',  Validators.required),
    'Summary':  new  FormControl(),
    'ImgUrl':  new  FormControl(),
    'CategoryID':  new  FormControl('',  Validators.required),
    'AuthorID':  new  FormControl('',  Validators.required),
    'PublisherID':  new  FormControl(),
    'Price':  new  FormControl(),
    'Quantity':  new  FormControl(),
  });

  public bookEdit: Book;
  constructor(private sharedataService: ShareDataService) {
    this.bookEdit = new Book();
  }

  ngOnInit() {
    this.bookEdit = this.sharedataService.book;
    console.log("Book edit" + this.bookEdit.Summary);
    this.myform.reset();
  }




}
