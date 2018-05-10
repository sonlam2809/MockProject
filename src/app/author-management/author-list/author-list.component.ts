import { Component, OnInit } from '@angular/core';
import { sampleProducts } from '../../model/products';
import { Router } from '@angular/router';



@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent implements OnInit {

  public gridData: any[] = sampleProducts;

  public listItems: Array<string> = [
    'Baseball', 'Basketball', 'Cricket', 'Field Hockey',
    'Football', 'Table Tennis', 'Tennis', 'Volleyball'
  ];

  public value = ['Basketball', 'Cricket'];

  constructor(public router: Router) { }

  ngOnInit() {
  }
  onAddAuthorClick() {
    console.log('click');
    this.router.navigateByUrl('/add-new-author');
  }

}
