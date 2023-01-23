import { Component } from '@angular/core';

import {
  AppStateInterface,
  AuthInterface,
} from '../../../shared/interfaces/interfaces';

import { Store } from '@ngrx/store';
import * as authActions from '../../../store/auth-store/auth.actions';
import { AuthService } from '../../../shared/services/auth.service';
import { Observable, Subscription } from 'rxjs';

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
    // this.store$.dispatch(
    //   authActions.loginAction({
    //     email: credentials.email,
    //     password: credentials.password,
    //   })
    // );
    this.loginSub = this.auth.signIn(credentials.email, credentials.password);
    this.loginSub.subscribe(error => console.log(error));
    this.auth.getToken();
  }
}
