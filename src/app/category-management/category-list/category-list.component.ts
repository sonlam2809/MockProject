import { Component, OnInit, OnDestroy } from '@angular/core';
import { sampleProducts } from '../../model/products';
import { Router } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { Subscription } from 'rxjs/Subscription';
import { Category } from '../../model/category';

import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {

  public subscription: Subscription;
  public cate: Category[];
  public _cate: Category;

  /* for sorting */
  public multiple = false;
  public allowUnsort = true;
  public sort: SortDescriptor[] = [{
    field: 'CateName',
    dir: 'asc'
  }];

  /* for paging */
  // public pageSize = 10;
  // public skip = 0;

  //kendo grid data
  public gridView: GridDataResult;

  constructor(private router: Router, public categoryService: CategoryService) {
    this._cate = new Category();
  }

  ngOnInit() {
    this.getall();
    console.log(this.cate);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  /* sortChange event */
  public sortChange(sort: SortDescriptor[]): void {
    this.sort = sort;
    this.loadCategories(this.cate);
  }

  /* get ordered category */
  private loadCategories(_pcate: Category[]): void {
    this.gridView = {
      data: orderBy(_pcate, this.sort),
      total: _pcate.length
    };
  }

  // private paging(_pcate: Category[]): void {
  //   this.gridView = {
  //     data: _pcate.slice(this.skip, this.skip + this.pageSize),
  //     total: _pcate.length
  //   };
  // }

  // public pageChange(event: PageChangeEvent): void {
  //   this.skip = event.skip;
  //   this.getall();
  // }

  //-------------------------------
  public listItems: Array<string> = [
    'Baseball', 'Basketball', 'Cricket', 'Field Hockey',
    'Football', 'Table Tennis', 'Tennis', 'Volleyball'
  ];

  public value = ['Basketball', 'Cricket'];
  //-------------------------------

  /* get all categories */
  getall() {
    return this.categoryService.getCategory().subscribe(x => {
      this.cate = x;
      this.loadCategories(this.cate);
      //this.paging(this.cate);
      console.log(x);
    });
  }

  /* click back pop up button */
  onBackCategoryListClick() {
    this.router.navigateByUrl("/list-category")
  }

  /* add new category */
  onAddNewCategory() {
    this.categoryService.postCategory(this._cate).subscribe(x => {
      alert("Tạo mới danh mục thành công!");
      this.router.navigateByUrl("/list-category");
      this.getall();
    });
  }

  /* delete a category */
  onClickDeleteCategory(cateId: string) {
    this.categoryService.deleteCategory(cateId).subscribe((x) => {
      console.log(x);
      this.getall();
      alert("Xóa danh mục thành công!");
    });
  }


  
}

