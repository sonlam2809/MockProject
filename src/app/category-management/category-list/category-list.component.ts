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

  public selectedPageSize = 3;
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
    this.loadItems();
    //this.getall();
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
  // private loadCategories(_pcate: Category[]): void {
  //   this.gridView = {
  //     data: _pcate,
  //     total: _pcate.length
  //   };
  // }

  //-------------------------------
  public listItems: Array<number> = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  ];
  //-------------------------------

  /* get all categories */
  // getall() {
  //   return this.categoryService.getCategory().subscribe(x => {
  //     this.cate = x;

  //     this.loadCategories(this.cate);
  //     console.log(x);
  //   });
  // }

  /* click back pop up button */
  onBackCategoryListClick() {
    this.router.navigateByUrl("/list-category")
  }

  /* add new category */
  onAddNewCategory() {
    this.categoryService.postCategory(this._cate).subscribe(x => {
      alert("Tạo mới danh mục thành công!");
      this.router.navigateByUrl("/list-category");
      this.loadItems();
    });
  }

  /* delete a category */
  onClickDeleteCategory(cateId: string) {
    this.categoryService.deleteCategory(cateId).subscribe((x) => {
      console.log(x);
      this.loadItems();
      alert("Xóa danh mục thành công!");
    });
  }


  // public editID: number;
  // onClickEditCategory(id: number){
  //   this.editID = id;
  // }





  public editDataItem: Category;
  public isNew: boolean;


  public addHandler() {
    this.editDataItem = new Category();
    this.isNew = true;
  }

  public editHandler({ dataItem }) {
    this.editDataItem = dataItem;
    this.isNew = false;
  }

  public cancelHandler() {
    this.editDataItem = undefined;
  }

  public saveHandler(cate: Category) {

    console.log(cate);
    this.categoryService.updateCategory(this.editDataItem.CateID, cate).subscribe((data) => {
      console.log(data);
    });

    this.editDataItem = undefined;
  }

  public removeHandler({ dataItem }) {
    //this.categoryService.remove(dataItem);
  }


  /* on change event combobox */

  onChange(newValue) {
    this.selectedPageSize = newValue;
    console.log("page size: " + this.selectedPageSize);
    // ... do other stuff here ...
    this.loadItems();
  }

  public skip = 0;
  public currentPage = 1;

  public pageChange(event: PageChangeEvent): void {

    this.skip = event.skip;
    this.currentPage = this.skip / this.selectedPageSize + 1;
    // console.log("loonffffffffffffffff " + Math.floor(this.skip / this.selectedPageSize));
    // console.log("pageChange skip: " + this.skip);

    // console.log("current page" + this.currentPage);
    this.loadItems();
  }
  private loadItems(): void {

    this.categoryService.getCategoryPage(this.currentPage, this.selectedPageSize, this.searchText).subscribe((x) => {
      this.gridView = {
        data: x["category"],
        total: x["total"]
      }
    });
  }

  /* Search */
  SearchEnter(){
    this.loadItems();
  }

  private searchText = "";

}

