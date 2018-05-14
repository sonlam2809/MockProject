import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { sampleProducts } from '../../model/products';
import { Router } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { Subscription } from 'rxjs/Subscription';
import { Category } from '../../model/category';

import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy, State } from '@progress/kendo-data-query';
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
    //this.editService.read();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  /* sortChange event */
  // public sortChange(sort: SortDescriptor[]): void {
  //   this.sort = sort;
  //   this.loadCategories(this.cate);
  // }

  /* get category => gridView*/
  private loadCategories(_pcate: Category[]): void {
    this.gridView = {
      data: _pcate,
      total: _pcate.length
    };
  }

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


  // public editID: number;
  // onClickEditCategory(id: number){
  //   this.editID = id;
  // }



  
  public gridState: State = {
    sort: [],
    skip: 0,
    take: 10
  };

  public editDataItem: Category;
  public isNew: boolean;


  public onStateChange(state: State) {
      this.gridState = state;

    //this.editService.read();
}

public addHandler() {
    this.editDataItem = new Category();
    this.isNew = true;
}

public editHandler({dataItem}) {
    this.editDataItem = dataItem;
    this.isNew = false;
}

public cancelHandler() {
    this.editDataItem = undefined;
}

public saveHandler(cate: Category) {

  console.log(cate);
    this.categoryService.updateCategory(this.editDataItem.CateID, cate).subscribe((data)=>{
      console.log(data);
    });

    this.editDataItem = undefined;
}

public removeHandler({dataItem}) {
    //this.categoryService.remove(dataItem);
}
  
}

