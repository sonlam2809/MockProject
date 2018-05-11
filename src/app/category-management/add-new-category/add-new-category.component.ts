import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Category } from '../../model/category'
import { CategoryService } from '../../services/category.service';


import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-add-new-category',
  templateUrl: './add-new-category.component.html',
  styleUrls: ['./add-new-category.component.scss']
})
export class AddNewCategoryComponent implements OnInit {

  public cate : Category;
  //-------------------
  constructor(private router: Router, public categoryService : CategoryService ) { 
    this.cate = new Category();
  }

  ngOnInit() {
  }
  onBackCategoryListClick(){
    this.router.navigateByUrl("/list-category")
  }
  //-----------------------

  onAddNewCategory(){
    //console.log(this.cate);
    this.categoryService.postCategory(this.cate).subscribe(x=>console.log("them thanh cong"));
    }
    
    //return this.categoryService.postCategory(this.cate);

}
