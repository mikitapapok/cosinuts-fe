import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppStateInterface } from '../interfaces/interfaces';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { selectAuthSelector } from '../../store/auth-store/auth.selectors';

@Injectable({ providedIn: 'root' })
export class BasketTokenService implements CanActivate {
  constructor(
    private store$: Store<AppStateInterface>,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.store$.pipe(select(selectAuthSelector)).pipe(
      map(creds => {
        if (!creds) {
          this.router.navigate(['signup']);
        }
        return true;
      })
    );
  }
}
