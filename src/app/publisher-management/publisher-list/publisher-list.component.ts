import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { sampleProducts } from '../../model/products';

@Component({
  selector: 'app-publisher-list',
  templateUrl: './publisher-list.component.html',
  styleUrls: ['./publisher-list.component.scss']
})
export class PublisherListComponent implements OnInit {

  public gridData: any[] = sampleProducts;

  public listItems: Array<string> = [
    'Baseball', 'Basketball', 'Cricket', 'Field Hockey',
    'Football', 'Table Tennis', 'Tennis', 'Volleyball'
  ];

  public value = ['Basketball', 'Cricket'];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onAddPublisherClick() {
    console.log('click');
    this.router.navigateByUrl('/add-new-publisher');
  }
}
