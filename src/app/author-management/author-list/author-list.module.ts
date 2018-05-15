import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { AuthorService } from '../../services/author.service';


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
    AuthorService
  ]
})

export class AuthorListModule { }

