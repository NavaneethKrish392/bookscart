import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BookslistComponent } from './bookslist/bookslist.component';
import { AngularMaterialModule } from './angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BooksContainerComponent } from './bookscontainer/bookscontainer.component';
import { CartComponent } from './cart/cart.component';
import { AuthguradServiceService } from './authgurad-service.service';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        SignupComponent,
        BooksContainerComponent,
        BookslistComponent,
        CartComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AngularMaterialModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [
        AuthguradServiceService,
        { provide: Window, useValue: window }
    ],
    bootstrap: [
        AppComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
