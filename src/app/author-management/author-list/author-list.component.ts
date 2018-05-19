import { Component, OnInit } from '@angular/core';
import { sampleProducts } from '../../model/products';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';
import { Author } from '../../model/author';

import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy, State } from '@progress/kendo-data-query';
import { Observable } from 'rxjs/Observable';
import { AuthorService } from '../../services/author.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';




@Component({
    selector: 'author-list',
    templateUrl: './author-list.component.html',
    styleUrls: ['./author-list.component.scss'],
})
export class AuthorListComponent implements OnInit {

    public selectedPageSize = 5;
    public itemNumber: Array<number> = [3, 5, 10, 15];
    public author: Author[];
    public _author: Author;

    //kendo grid data
    public gridView: GridDataResult;

    constructor(private router: Router, public authorService: AuthorService) {
        this._author = new Author();
    }

    /* Sau khi compent được khởi tạo */
    ngOnInit() {
        this.loadItems();
    }

    /* click back pop up button */
    onBackAuthorListClick() {
        this.router.navigateByUrl("/list-author")
    }

    /* add new category */
    onAddNewAuthor() {
        this.authorService.postAuthor(this._author).subscribe(x => {
            alert("Thêm mới tác giả thành công!");
            this.loadItems();
            document.getElementById('exampleModalCenter').click();
            this.router.navigateByUrl("/list-author");
        });
    }

    /* delete a category */
    onClickDeleteAuthor(authorId: string) {
        this.authorService.deleteAuthor(authorId).subscribe((x) => {
            console.log(x);
            this.loadItems();
            alert("Xóa tác giả thành công!");
        });
    }

    public editDataItem: Author;
    public isNew: boolean;

    public addHandler() {
        this.editDataItem = new Author();
        this.isNew = true;
    }
    public editHandler({ dataItem }) {
        this.editDataItem = dataItem;
        this.isNew = false;
    }

    public cancelHandler() {
        this.editDataItem = undefined;
    }

    public saveHandler(author: Author) {

        this.authorService.updateAuthor(this.editDataItem.AuthorID, author).subscribe((data) => {
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
        //console.log("page size: " + this.selectedPageSize);
        // ... do other stuff here ...
        this.loadItems();
    }

    public skip = 0;
    public currentPage = 1;

    public pageChange(event: PageChangeEvent): void {

        this.skip = event.skip;
        this.currentPage = this.skip / this.selectedPageSize + 1;
        this.loadItems();
    }

    /* Load tac gia theo pagenumber, pagesize and search name */
    private loadItems(): void {

        this.authorService.getAuthorPage(this.currentPage, this.selectedPageSize, this.searchText).subscribe((x) => {
            this.gridView = {
                data: x["author"],
                total: x["total"]
            }
        });
    }

    /* Search */
    SearchEnter() {
        this.loadItems();
    }

    private searchText = "";


}

