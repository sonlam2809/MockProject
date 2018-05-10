import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';


@Component({
  selector: 'app-add-new-author',
  templateUrl: './add-new-author.component.html',
  styleUrls: ['./add-new-author.component.scss']
})
export class AddNewAuthorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onBackAuthorListClick(){
    this.router.navigateByUrl("/list-author");
  }
}
