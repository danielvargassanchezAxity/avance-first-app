import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';
import { UsersService } from './users.service';
import { delay } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataResolver implements Resolve<User> {
  constructor(private userService: UsersService) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    const userId = route.paramMap.get('id');
    return this.userService.getById(userId ?? '').pipe(item => item.pipe(delay(2000)));
  }
}
