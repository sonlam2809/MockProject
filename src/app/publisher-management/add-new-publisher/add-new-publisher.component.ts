import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-publisher',
  templateUrl: './add-new-publisher.component.html',
  styleUrls: ['./add-new-publisher.component.scss']
})
export class AddNewPublisherComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onBackPublisherListClick(){
    this.router.navigateByUrl("/list-publisher");
  }

}
