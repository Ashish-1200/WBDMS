import { LoginService } from '../login/login.service';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root' })

    export class Equipauth implements CanActivate {
        currentrole:any;
        constructor(private loginS:LoginService,private route:Router){}
        canActivate(
          route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
            if (this.loginS.IsLogged()) {
              this.currentrole = this.loginS.GetRolebyToken(this.loginS.getToken());
              if (this.currentrole=='Administrator' || this.currentrole=='Public'|| this.currentrole=='Volunteer'|| this.currentrole=='Healthservice' || this.currentrole=='Policeservice'|| this.currentrole=='Fireservice'|| this.currentrole=='MOW'|| this.currentrole=='USMO') {
                return true;
              } else {
                alert('You do not have the necessary permission to access this information.!');
                this.route.navigate(['/mainpage']);
                return false;
              }
            } else {
              this.route.navigate(['login']);
              return false;
            }
          }
      
      }