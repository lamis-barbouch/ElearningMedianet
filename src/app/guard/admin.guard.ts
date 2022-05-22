import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from '../_services/user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private loginService: UserAuthService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> |
     Promise<boolean | UrlTree> | boolean | UrlTree {
   /* --Is Logged in or Not-- */
   
   const role= this.loginService.getRoleName();

   if (this.loginService.isLoggedIn()) {
    /* --Is Authorized or Not-- */
    if (role === 'Admin') {
      return true;
    } else {
      this.router.navigate(['401']);
      return false;
    }
  } else {
    this.router.navigate(['login']);
    return false;
  }
}
}