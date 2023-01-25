import { Component } from '@angular/core';

import {
  AppStateInterface,
  AuthInterface,
} from '../../../shared/interfaces/interfaces';

import { select, Store } from '@ngrx/store';
import * as authActions from '../../../store/auth-store/auth.actions';
import { AuthService } from '../../../shared/services/auth.service';
import { map, Observable, of, Subscription } from 'rxjs';
import { loadingSelector } from '../../../store/auth-store/auth.selectors';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
})
export class LoginComponent {
  loading$: Observable<boolean> = of(false);

  constructor(
    private store$: Store<AppStateInterface>,
    private auth: AuthService
  ) {
    this.loading$ = this.store$.pipe(select(loadingSelector));
  }

  loginHandler(credentials: AuthInterface) {
    this.store$.dispatch(
      authActions.loginAction({
        email: credentials.email,
        password: credentials.password,
      })
    );
    this.store$.dispatch(authActions.startLoadingAction());
  }
}
