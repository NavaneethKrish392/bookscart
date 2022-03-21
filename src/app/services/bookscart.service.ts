import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
    providedIn: 'root'
})

export class BookscartService {
    
    private cartData = new BehaviorSubject<any>(null);

    public domainUrl = environment.baseUrl;

    constructor(public http: HttpClient) {
        this.cartData.next({
            cartCount: 0,
            cartData: []
        });
    }

    public signupUser(postData: any) {
        const apiURL = `${this.domainUrl}signUpUsers`;
        return this.http.post<any>(apiURL, postData).pipe(map((res: any) => {
            return res;
        }));
    }

    public loginUser(postData: any) {
        const apiURL = `${this.domainUrl}signUpUsers`;
        return this.http.get<any>(apiURL, postData).pipe(map((res: any) => {
            return res;
        }));
    }

    public getBooksData() {
        const apiURL = `${this.domainUrl}books`;
        return this.http.get<any>(apiURL).pipe(map((res: any) => {
            return res;
        }));
    }

    public getCartData(): Observable<any> {
        return this.cartData.asObservable();
    }

    public setCartData(data: any) {
        this.cartData.next(data);
    }

}
