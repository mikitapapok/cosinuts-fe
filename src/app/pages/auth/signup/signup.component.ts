import { Component, OnInit } from '@angular/core';
import * as authActions from '../../../store/auth-store/auth.actions';
import { select, Store } from '@ngrx/store';
import {
  AppStateInterface,
  AuthInterface,
} from '../../../shared/interfaces/interfaces';
import { loadingSelector } from '../../../store/auth-store/auth.selectors';
import { Subscribable } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: 'signup.component.html',
})
export class SignupComponent implements OnInit {
  loading$?: Subscribable<boolean>;

  constructor(private store$: Store<AppStateInterface>) {}

  ngOnInit() {
    this.loading$ = this.store$.pipe(select(loadingSelector));
  }

  submitHandler(value: AuthInterface) {
    this.store$.dispatch(
      authActions.signupAction({
        email: value.email,
        password: value.password,
      })
    );
  }
}
