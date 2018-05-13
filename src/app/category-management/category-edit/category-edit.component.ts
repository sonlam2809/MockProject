import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { CategoryService } from '../../services/category.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Category } from '../../model/category';

@Component({
  selector: 'category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent implements OnInit {

  public category: Category;
  public subscription: Subscription;
  public subscriptionParams: Subscription;

  constructor(
    public categoryService: CategoryService,
    public routerService: Router,
    public activatedRouteServices: ActivatedRoute
  ) { }

  ngOnInit() {
    this.category = new Category();
    this.loadData();
  }

  loadData() {
    this.subscriptionParams = this.activatedRouteServices.params.subscribe((data: Params) => {
      let id = data['id'];
      this.subscription = this.categoryService.getCategoryByID(id).subscribe((cate: Category) => {
        this.category = cate;
        console.log(this.category);
      })
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.subscriptionParams) {
      this.subscriptionParams.unsubscribe();
    }
  }

  /* Edit a category */
  onClickEditCategory() {
    console.log(this.category.CateID);
    this.subscription = this.categoryService.updateCategory(this.category.CateID, this.category).subscribe((data: Category) => {
      this.routerService.navigateByUrl("list-category");
      console.log(data);
    });
    console.log("---------------");
  }

  onBackCategoryListClick() {
    this.routerService.navigateByUrl("list-category");
  }



}
