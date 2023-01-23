import { Component } from '@angular/core';

import {
  AppStateInterface,
  AuthInterface,
} from '../../../shared/interfaces/interfaces';

import { Store } from '@ngrx/store';
import * as authActions from '../../../store/auth-store/auth.actions';
import { AuthService } from '../../../shared/services/auth.service';
import {
  defer,
  from,
  map,
  mergeMap,
  Observable,
  Subscribable,
  Subscription,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
})
export class LoginComponent {
  loginSub?: Observable<any>;
  userInfo?: Subscription;

  constructor(
    private store$: Store<AppStateInterface>,
    private auth: AuthService
  ) {}

  loginHandler(credentials: AuthInterface) {
    this.store$.dispatch(
      authActions.loginAction({
        email: credentials.email,
        password: credentials.password,
      })
    );
    // this.loginSub = this.auth.login(credentials).pipe(
    //   mergeMap(user => {
    //     if (user.user) {
    //       return from(user.user.getIdToken(true));
    //     }
    //     return from(new Promise(resolve => true));
    //   })
    // );
  }
}
