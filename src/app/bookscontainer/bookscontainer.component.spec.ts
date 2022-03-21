import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { BooksContainerComponent } from './bookscontainer.component';
import { MatMenuModule } from '@angular/material/menu';

describe('BooksContainerComponent', () => {
    let component: BooksContainerComponent;
    let fixture: ComponentFixture<BooksContainerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                HttpClientModule,
                HttpClientTestingModule,
                RouterTestingModule,
                MatMenuModule
            ],
            declarations: [
                BooksContainerComponent
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(BooksContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
