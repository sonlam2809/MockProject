import { Component, OnInit } from '@angular/core';
import { sampleProducts } from '../../model/products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  public gridData: any[] = sampleProducts;

  public listItems: Array<string> = [
    'Baseball', 'Basketball', 'Cricket', 'Field Hockey',
    'Football', 'Table Tennis', 'Tennis', 'Volleyball'
  ];

  public value = ['Basketball', 'Cricket'];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onAddCategoryClick(){
    console.log();
    this.router.navigateByUrl('/add-new-category');
  }
}
