import { Component } from '@angular/core';
import * as authActions from '../../../store/auth-store/auth.actions';
import { Store } from '@ngrx/store';
import {
  AppStateInterface,
  AuthInterface,
} from '../../../shared/interfaces/interfaces';

@Component({
  selector: 'app-signup',
  templateUrl: 'signup.component.html',
})
export class SignupComponent {
  constructor(private store$: Store<AppStateInterface>) {}

  submitHandler(value: AuthInterface) {
    // this.authService
    //   .signUp(this.signupForm.value.email, this.signupForm.value.password)
    //   .pipe(
    //     catchError(e => {
    //       throw e;
    //     })
    //   )
    //   .subscribe(
    //     value => {
    //       console.log(value);
    //     },
    //     error => {
    //       window.alert(error.message);
    //     }
    //   );
    this.store$.dispatch(
      authActions.signupAction({
        email: value.email,
        password: value.password,
      })
    );
  }
}
