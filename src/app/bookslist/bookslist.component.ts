import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookscartService } from '../services/bookscart.service';

@Component({
    selector: 'app-bookslist',
    templateUrl: './bookslist.component.html',
    styleUrls: ['./bookslist.component.css']
})

export class BookslistComponent implements OnInit, OnDestroy {

    @Input() public booksData: any;
    @Output() public cartObj = new EventEmitter<any>();

    public cartCount !: number;
    public cartData !: any;
    public subscription!: Subscription;

    constructor(
        public booksCartService: BookscartService
    ) { }

    ngOnInit() {
        this.cartUpdate();
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

    public addCartClick(book: any) {
        const addCount = 0;
        if (book.bookQty > 0) {
            book.bookQty = book.bookQty - 1;
            book.availability = (book.bookQty === 0) ? 'Out Of Stock' : 'InStock';
            this.cartCount = this.cartCount + 1;
            book.addedQty = book.addedQty ? (book.addedQty + 1) : (addCount + 1);
            if (this.cartData.length > 0) {
                const findBook = this.cartData.find((e: any) => e.bookid === book.bookid);
                if (!findBook) {
                    this.cartData.push(book);
                }
            } else {
                this.cartData.push(book);
            }

            const cartAddedObj = {
                cartCount: this.cartCount,
                cartData: this.cartData
            };
            this.booksCartService.setCartData(cartAddedObj);
        }
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
