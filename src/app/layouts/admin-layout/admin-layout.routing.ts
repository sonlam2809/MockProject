import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { BooklistComponent } from '../../book-management/booklist/booklist.component';
import { AddNewBookComponent } from '../../book-management/add-new-book/add-new-book.component';

import { PublisherListComponent } from '../../publisher-management/publisher-list/publisher-list.component';
import { AddNewPublisherComponent } from '../../publisher-management/add-new-publisher/add-new-publisher.component';

import { CategoryListComponent } from '../../category-management/category-list/category-list.component';
import { CategoryEditComponent } from '../../category-management/category-edit/category-edit.component';


// import { AuthorListComponent } from '../../author-management/author-list/author-list.component';

import { Component } from '@angular/core';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard', component: DashboardComponent },
    { path: 'list-book', component: BooklistComponent },
    { path: 'logout', component: MapsComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'upgrade', component: UpgradeComponent },
    { path: 'add-new-book', component: AddNewBookComponent },
    // { path: 'list-author', component: AuthorListComponent },
    { path: 'list-publisher', component: PublisherListComponent },
    { path: 'add-new-publisher', component: AddNewPublisherComponent },
    {
        path: 'list-category', component: CategoryListComponent,
        // children: [
        //     {
        //         path: ':id/edit',
        //         component: CategoryEditComponent
        //     },
        //     {
        //         path: '',
        //         component: CategoryListComponent
        //     },
        //     {
        //         path: 'list-category',
        //         component: CategoryEditComponent
        //     }
        // ]
    },
];
