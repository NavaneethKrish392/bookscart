import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { BooksContainerComponent } from './bookscontainer/bookscontainer.component';
import { DeactiveguardGuard } from './deactiveguard.guard';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [{
    path: 'login',
    component: LoginComponent
}, {
    path: 'signup',
    component: SignupComponent
}, {
    path: 'books',
    component: BooksContainerComponent,
    canActivate: [AuthenticationGuard],
    // canDeactivate: [DeactiveguardGuard]
}, {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
