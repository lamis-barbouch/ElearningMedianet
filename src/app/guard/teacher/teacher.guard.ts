import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login/login.service';
import { UserAuthService } from 'src/app/_services/user-auth.service';

@Injectable({
  providedIn: 'root',
})
export class TeacherGuard implements CanActivate {
  constructor(private loginService: UserAuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    /* --Is Logged in or Not-- */
    const role= this.loginService.getRoleName();

   if (this.loginService.isLoggedIn()) {
    /* --Is Authorized or Not-- */
    if (role === 'Formateur') {
      return true;
    } else {
      this.router.navigate(['401']);
      return false;
    }
  } else {
    this.router.navigate(['/']);
    return false;
  }
}
}