import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

    @Input() public cartData: any;
    public totalAmount!: number;

    constructor() { }

    ngOnInit(): void {
        if (this.cartData && this.cartData.length > 0) {
            this.totalAmount = 0;
            this.cartData.forEach((ele: any) => {
                ele.totalAmount = ele.bookPrice * ele.addedQty;
                this.totalAmount = this.totalAmount + ele.totalAmount;
            });
        }
    }

}
