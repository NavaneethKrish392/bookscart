import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class AuthguradServiceService {

    constructor() { }

    public gettoken() {
        return !!localStorage.getItem("currentUser");
    }

}
