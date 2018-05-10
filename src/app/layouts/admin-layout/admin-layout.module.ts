import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

import { GridModule } from '@progress/kendo-angular-grid';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

import { AddNewBookComponent } from '../../book-management/add-new-book/add-new-book.component';
import { AddNewAuthorComponent } from '../../author-management/add-new-author/add-new-author.component';
import { AddNewPublisherComponent } from '../../publisher-management/add-new-publisher/add-new-publisher.component';
import { AddNewCategoryComponent } from '../../category-management/add-new-category/add-new-category.component';

import { MatSelectModule } from '@angular/material/select';
// import { HttpModule } from '@angular/http';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
} from '@angular/material';

import { BooklistComponent } from '../../book-management/booklist/booklist.component';
import { AuthorListComponent } from '../../author-management/author-list/author-list.component';
import { PublisherListComponent } from '../../publisher-management/publisher-list/publisher-list.component';
import { CategoryListComponent } from '../../category-management/category-list/category-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    GridModule,
    ButtonsModule,
    DropDownsModule,
    MatSelectModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    BooklistComponent,
    AddNewBookComponent,
    AuthorListComponent,
    AddNewAuthorComponent,
    PublisherListComponent,
    AddNewPublisherComponent,
    CategoryListComponent,
    AddNewCategoryComponent,
  ]
})

export class AdminLayoutModule { }
