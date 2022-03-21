import { Component, HostListener, Inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ComponentCanDeactivate } from '../component-can-deactivate';
import { BookscartService } from '../services/bookscart.service';

@Component({
    selector: 'app-bookscontainer',
    templateUrl: './bookscontainer.component.html',
    styleUrls: ['./bookscontainer.component.css']
})

export class BooksContainerComponent implements OnInit, OnDestroy, ComponentCanDeactivate {

    public isShowBooksList!: boolean;
    public booksData: any;
    public cartCount!: number;
    public cartData!: any;
    public currentUser!: any;
    public subscription!: Subscription;

    constructor(
        private booksCartService: BookscartService,
        private router: Router
    ) { }

    ngOnInit(): void {
        const user: any = localStorage.getItem('currentUser');
        this.currentUser = JSON.parse(user);
        this.isShowBooksList = true;
        this.booksData = [];
        this.getBooks();
        this.cartUpdate();
    }

    public homeClick() {
        this.isShowBooksList = true;
    }

    public getBooks() {
        this.booksCartService.getBooksData().subscribe((res: any) => {
            if (res && res.length > 0) {
                this.booksData = res;
            }
        });
    }

    public cartUpdate() {
        this.cartCount = 0;
        this.cartData = [];
        this.subscription = this.booksCartService.getCartData().subscribe((res) => {
            if (res) {
                this.cartCount = res.cartCount ? res.cartCount : 0;
                this.cartData = res.cartData ? res.cartData : [];
            }
        });
    }

    public cartClick() {
        this.isShowBooksList = false;
    }

    public logOutClick() {
        const cartAddedObj = {
            cartCount: 0,
            cartData: []
        };
        this.booksCartService.setCartData(cartAddedObj);
        localStorage.removeItem('currentUser');
        this.router.navigate(['login']);
    }

    public canDeactivate(): boolean {
        if (this.cartCount > 0) {
            return true;
        } else {
            return false;
        }
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    
    @HostListener('window:beforeunload', ['$event'])
    public beforeunloadHandler($event: any) {
        if (this.canDeactivate()) {
            $event.preventDefault();
            $event.returnValue = false;
        }
    }
}
