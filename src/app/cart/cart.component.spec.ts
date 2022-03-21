import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';

describe('CartComponent', () => {
    let component: CartComponent;
    let fixture: ComponentFixture<CartComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CartComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CartComponent);
        component = fixture.componentInstance;
        component.cartData = [{
            "bookid": 1,
            "bookName": "Fifty Shades Darker",
            "bookSubTitle": "Fifty Shades",
            "bookDesc": "Fifty Shades Darker is a 2012 erotic romance novel by British author E. L. James. It is the second installment in the Fifty Shades trilogy that traces the deepening relationship between a college graduate, Anastasia Steele, and a young business magnate, Christian Grey.",
            "bookAuthor": "E. L. James",
            "bookQty": 10,
            "publishedDate": "17-Apr-2012",
            "availability": "InStock",
            "bookPrice": 100.00,
            "totalAmount": 0,
            "bookImgUrl": "/assets/images/Fifty_Shades_Darker.png"
        }];
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
