import { Component, OnInit, OnDestroy } from '@angular/core';
import { sampleProducts } from '../../model/products';
import { Router } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { Subscription } from 'rxjs/Subscription';
import { Category } from '../../model/category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {
  
  public subscription : Subscription;
  public cate : Category[];

//-------------------------------
  public gridData: any[] = sampleProducts;

  public listItems: Array<string> = [
    'Baseball', 'Basketball', 'Cricket', 'Field Hockey',
    'Football', 'Table Tennis', 'Tennis', 'Volleyball'
  ];

  public value = ['Basketball', 'Cricket'];
//--------------------------------


  constructor(private router: Router, public categoryService : CategoryService) { 

  }

  ngOnInit() {
    this.getall()
  }
  getall()
  {
    return this.categoryService.getCategory().subscribe(x=> {
      this.cate = x;
      console.log(x);
    });
  }

  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

  onAddCategoryClick(){
    //console.log();
    this.router.navigateByUrl('/add-new-category');
  }

}
