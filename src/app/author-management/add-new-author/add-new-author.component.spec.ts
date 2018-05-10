import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewAuthorComponent } from './add-new-author.component';

describe('AddNewAuthorComponent', () => {
  let component: AddNewAuthorComponent;
  let fixture: ComponentFixture<AddNewAuthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewAuthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
