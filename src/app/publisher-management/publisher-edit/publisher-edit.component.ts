import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { CategoryService } from '../../services/category.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Publisher } from '../../model/publisher';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'publisher-edit',
  templateUrl: './publisher-edit.component.html',
  styleUrls: ['./publisher-edit.component.scss']
})
export class PublisherEditComponent implements OnInit {
  
  constructor(
  
  ) { }

  ngOnInit() {

  }


  public active = false;
    public editForm: FormGroup = new FormGroup({
        'PubID': new FormControl(),
        'Name': new FormControl('', Validators.required),
        'Description': new FormControl(),
    });



    @Input() public isNew = false;

    @Input() public set model(publisher: Publisher) {
        this.editForm.reset(publisher);

        this.active = publisher !== undefined;
    }

    @Output() cancel: EventEmitter<any> = new EventEmitter();
    @Output() save: EventEmitter<Publisher> = new EventEmitter();

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
