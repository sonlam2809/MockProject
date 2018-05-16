import { Component, OnInit } from '@angular/core';
import { sampleProducts } from '../../model/products';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy, State } from '@progress/kendo-data-query';
import { Observable } from 'rxjs/Observable';

import { Publisher } from '../../model/publisher';
import { PublisherService } from '../../services/publisher.service';


@Component({
    selector: 'publisher-list',
    templateUrl: './publisher-list.component.html',
    styleUrls: ['./publisher-list.component.scss'],
})
export class PublisherListComponent implements OnInit {


    public selectedPageSize = 3;
    public publisher: Publisher[];
    public _publisher: Publisher;

    //kendo grid data
    public gridView: GridDataResult;

    constructor(private router: Router, public pubService: PublisherService) {
        this._publisher = new Publisher();
    }

    /* Sau khi compent được khởi tạo */
    ngOnInit() {
        this.loadItems();
    }

    /* click back pop up button */
    onBackPublisherListClick() {
        this.router.navigateByUrl("/list-publisher")
    }

    /* add new publisher */
    onAddNewPublisher() {
        this.pubService.postPublisher(this._publisher).subscribe(x => {
            alert("Thêm mới nhà xuất bản thành công!");
            this.router.navigateByUrl("/list-publisher");
            this.loadItems();
        });
    }

    /* delete a publisher */
    onClickDeletePublisher(pubId: string) {
        this.pubService.deletePublisher(pubId).subscribe((x) => {
            console.log(x);
            this.loadItems();
            alert("Xóa nhà xuất bản thành công!");
        });
    }

    public editDataItem: Publisher;
    public isNew: boolean;

    public addHandler() {
        this.editDataItem = new Publisher();
        this.isNew = true;
    }
    public editHandler({ dataItem }) {
        this.editDataItem = dataItem;
        this.isNew = false;
    }

    public cancelHandler() {
        this.editDataItem = undefined;
    }

    public saveHandler(publisher: Publisher) {

        this.pubService.updatePublisher(this.editDataItem.PubID, publisher).subscribe((data) => {
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

    /* Load nha xuat ban theo pagenumber, pagesize and search name */
    private loadItems(): void {

        this.pubService.getPublisherPage(this.currentPage, this.selectedPageSize, this.searchText).subscribe((x) => {
            this.gridView = {
                data: x["publisher"],
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

