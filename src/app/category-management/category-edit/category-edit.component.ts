import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { CategoryService } from '../../services/category.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Category } from '../../model/category';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent implements OnInit {

  //public category: Category;
  //public subscription: Subscription;
  //public subscriptionParams: Subscription;

  constructor(
    //public categoryService: CategoryService,
    //public routerService: Router,
    //public activatedRouteServices: ActivatedRoute
  ) { }

  ngOnInit() {
    //this.category = new Category();
//    this.loadData();
  }

  // loadData() {
  //   this.subscriptionParams = this.activatedRouteServices.params.subscribe((data: Params) => {
  //     let id = data['id'];
  //     this.subscription = this.categoryService.getCategoryByID(id).subscribe((cate: Category) => {
  //       this.category = cate;
  //       console.log(this.category);
  //     })
  //   });
  // }

  // ngOnDestroy() {
  //   if (this.subscription) {
  //     this.subscription.unsubscribe();
  //   }
  //   if (this.subscriptionParams) {
  //     this.subscriptionParams.unsubscribe();
  //   }
  // }

  // /* Edit a category */
  // onClickEditCategory() {
  //   console.log("ssssssssssssssssssssssss")
  //   console.log(this.category.CateID);
  //   this.subscription = this.categoryService.updateCategory(this.category.CateID, this.category).subscribe((data: Category) => {
  //     this.routerService.navigateByUrl("list-category");
  //     console.log(data);
  //   });
  //   console.log("---------------");
  // }

  // onBackCategoryListClick() {
  //   this.routerService.navigateByUrl("list-category");
  // }









  public active = false;
    public editForm: FormGroup = new FormGroup({
        'CateID': new FormControl(),
        'CateName': new FormControl('', Validators.required),
        'Description': new FormControl(),
    });



    @Input() public isNew = false;

    @Input() public set model(category: Category) {
        this.editForm.reset(category);

        this.active = category !== undefined;
    }

    @Output() cancel: EventEmitter<any> = new EventEmitter();
    @Output() save: EventEmitter<Category> = new EventEmitter();

    public onSave(e): void {
        e.preventDefault();
        this.save.emit(this.editForm.value);
        this.active = false;
    }

    public onCancel(e): void {
        e.preventDefault();
        this.closeForm();
    }

    private closeForm(): void {
        this.active = false;
        this.cancel.emit();
    }



}
