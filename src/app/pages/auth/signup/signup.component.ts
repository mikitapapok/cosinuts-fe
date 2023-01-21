import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { catchError } from 'rxjs';
import * as authActions from '../../../store/auth-store/auth.actions';
import { Store } from '@ngrx/store';
import { AppStateInterface } from '../../../shared/interfaces/interfaces';

@Component({
  selector: 'app-signup',
  templateUrl: 'signup.component.html',
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup = new FormGroup({});
  constructor(
    private authService: AuthService,
    private store$: Store<AppStateInterface>
  ) {}
  ngOnInit() {
    this.signupForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        this.emailValidator.bind(this),
      ]),
      password: new FormControl('', [
        Validators.required,
        this.passwordValidator.bind(this),
      ]),
    });
  }
  emailValidator(control: AbstractControl): { [s: string]: boolean } | null {
    if (!control.value.includes('@')) {
      return { email: true };
    }
    return null;
  }
  passwordValidator(control: AbstractControl): { [s: string]: boolean } | null {
    if (control.value.length < 6) {
      return { password: true };
    }
    return null;
  }

  ongSubmitHandler() {
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
        email: this.signupForm.value.email,
        password: this.signupForm.value.password,
      })
    );
    this.signupForm.reset({
      email: '',
      password: '',
    });
  }
}
