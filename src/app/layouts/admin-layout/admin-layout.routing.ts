import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

import { AddNewBookComponent } from '../../book-management/add-new-book/add-new-book.component';

import { PublisherListComponent } from '../../publisher-management/publisher-list/publisher-list.component';

import { CategoryListComponent } from '../../category-management/category-list/category-list.component';
import { CategoryEditComponent } from '../../category-management/category-edit/category-edit.component';


import { Component } from '@angular/core';

import { AuthorListComponent } from '../../author-management/author-list/author-list.component';

import { BookListComponent } from '../../book-management/booklist/booklist.component';
import { BookEditComponent } from '../../book-management/book-edit/book-edit.component';
import { PageNotFoundComponent } from '../../page-not-found/page-not-found.component';

export const AdminLayoutRoutes: Routes = [

    { path: 'dashboard', component: DashboardComponent },
    { path: 'list-book', component: BookListComponent },
    { path: 'logout', component: MapsComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'upgrade', component: UpgradeComponent },
    { path: 'add-new-book', component: AddNewBookComponent },
    { path: 'list-author', component: AuthorListComponent },
    { path: 'list-publisher', component: PublisherListComponent },
    { path: 'list-category', component: CategoryListComponent},
    {
        path: '**',
        component: PageNotFoundComponent 
    },	
    { path: 'edit-book', component: BookEditComponent },
];
