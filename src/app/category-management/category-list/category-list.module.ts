import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { CategoryService } from '../../services/category.service';


@NgModule({
  imports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    HttpClientJsonpModule,
    
  ],
  declarations: [

  ],
  providers: [
    CategoryService
  ]
})

export class CategoryListModule { }
