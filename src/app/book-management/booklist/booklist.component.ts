import { Component, OnInit } from '@angular/core';
import { sampleProducts } from '../../model/products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss']
})
export class BooklistComponent implements OnInit {

  public gridData: any[] = sampleProducts;

  public listItems: Array<string> = [
    'Baseball', 'Basketball', 'Cricket', 'Field Hockey',
    'Football', 'Table Tennis', 'Tennis', 'Volleyball'
  ];

  public value = ['Basketball', 'Cricket'];

  constructor(public router: Router) { }

  ngOnInit() {
  }
  // onButtonClick() {
  //   console.log('click');
  //   this.router.navigateByUrl('/add-new-book');
  // }

}
