import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import { Observable } from 'rxjs';
import {LoginService} from "../login.service";

@Injectable({
  providedIn: 'root'
})
export class ApplicationGuardService implements CanActivate{

  constructor(private authServ:LoginService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let user = this.authServ.getUserStorage();
      return user != null;
  }
}
