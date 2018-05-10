import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-new-book',
  templateUrl: './add-new-book.component.html',
  styleUrls: ['./add-new-book.component.scss']
})
export class AddNewBookComponent implements OnInit {

  selectedDanhMuc = '';
  selectedTacGia = '';
  selectedNhaXuatBan = '';
  selectedTrangThai = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }
  OnBackClick(){
    this.router.navigateByUrl("/list-book");
  }

}
