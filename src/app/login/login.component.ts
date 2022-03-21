import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookscartService } from '../services/bookscart.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

    public loginForm !: FormGroup;
    public hide = true;

    constructor(
        private formbuiler: FormBuilder,
        private router: Router,
        private booksCartService: BookscartService
    ) { }

    ngOnInit(): void {
        this.loginForm = this.formbuiler.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(5)]]
        });
    }

    public loginClick() {
        this.booksCartService.loginUser(this.loginForm.value).subscribe((res: any) => {
            if (res && res.length > 0) {
                const findUser = res.find((ele: any) => {
                    return ele.email === this.loginForm.value.email && ele.password === this.loginForm.value.password;
                });
                if (findUser) {
                    this.loginForm.reset();
                    localStorage.setItem('currentUser', JSON.stringify(findUser));
                    this.router.navigate(['books']);
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Login',
                        text: 'User Not Found!'
                    });
                }
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Login',
                    text: 'User Not Found!'
                });
            }
        }, (error) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!'
            });
        });
    }

}
