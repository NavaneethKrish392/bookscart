import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ComponentCanDeactivate } from './component-can-deactivate';

@Injectable({
    providedIn: 'root'
})
export class DeactiveguardGuard implements CanDeactivate<ComponentCanDeactivate> {
    canDeactivate(
        component: ComponentCanDeactivate,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot
    ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (component.canDeactivate()) {
            return confirm('Are you sure, you want to leave the shopping');
        } else {
            return false;
        }
        // return component.canDeactivate();
    }
}
