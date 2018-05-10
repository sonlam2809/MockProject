import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-category',
  templateUrl: './add-new-category.component.html',
  styleUrls: ['./add-new-category.component.scss']
})
export class AddNewCategoryComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onBackCategoryListClick(){
    this.router.navigateByUrl("/list-category")
  }
}
