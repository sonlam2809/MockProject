import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Author } from '../../model/author';

@Component({
  selector: 'author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.scss']
})
export class AuthorEditComponent implements OnInit {


  constructor(

  ) { }

  ngOnInit() {

  }


  public active = false;
    public editForm: FormGroup = new FormGroup({
        'AuthorID': new FormControl(),
        'AuthorName': new FormControl('', Validators.required),
        'History': new FormControl(),
    });



    @Input() public isNew = false;

    @Input() public set model(author: Author) {
        this.editForm.reset(author);

        this.active = author !== undefined;
    }

    @Output() cancel: EventEmitter<any> = new EventEmitter();
    @Output() save: EventEmitter<Author> = new EventEmitter();

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
