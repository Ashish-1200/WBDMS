import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';
//import1
@Injectable({
  providedIn: 'root'
})
export class authentication implements CanActivate {
  currentrole:any;
  constructor(private loginS:LoginService,private route:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if (this.loginS.IsLogged()) {
        this.currentrole = this.loginS.GetRolebyToken(this.loginS.getToken());
        if (this.currentrole == 'Administrator') {
          return true;
        } else {
          alert('You are not authorized to access this information!');
          this.route.navigate(['/mainpage']);
          return false;
        }
      } else {
        this.route.navigate(['login']);
        return false;
      }
    }

}
