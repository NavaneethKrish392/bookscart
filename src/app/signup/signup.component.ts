import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookscartService } from '../services/bookscart.service';
import Swal from 'sweetalert2';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

    public signUpForm !: FormGroup;
    public hide = true;

    constructor(
        private formbuiler: FormBuilder,
        private router: Router,
        private booksCartService: BookscartService
    ) { }

    ngOnInit(): void {
        this.signUpForm = this.formbuiler.group({
            firstName: ['', [Validators.required, Validators.minLength(4)]],
            lastName: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            phoneNumber: ['', [Validators.required, Validators.minLength(10)]],
            address: ['', [Validators.required]],
            password: ['', [Validators.required, Validators.minLength(5)]]
        });
    }

    public signUpClick() {
        this.booksCartService.signupUser(this.signUpForm.value).subscribe((res: any) => {
            if (res) {
                this.signUpForm.reset();
                localStorage.setItem('currentUser', JSON.stringify(res));
                this.router.navigate(['books']);
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!'
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
