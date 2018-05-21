import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../model/user';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Trang chính', icon: 'dashboard', class: '' },
    { path: '/list-category', title: 'Danh mục sách', icon: 'person', class: '' },
    { path: '/list-author', title: 'Quản lý tác giả', icon: 'content_paste', class: '' },
    { path: '/list-publisher', title: 'Quản lý nhà xuất bản', icon: 'library_books', class: '' },
    { path: '/list-book', title: 'Quản lý sách ', icon: 'bubble_chart', class: '' },
    { path: '/login', title: 'Thoát', icon: 'location_on', class: '' },
    // { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

    menuItems: any[];
    loginedUser: User;

    constructor(private authService: AuthService) { 
        this.loginedUser = authService.getLoggedInUser();
    }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
}
