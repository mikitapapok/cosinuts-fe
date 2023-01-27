import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppStateInterface } from '../interfaces/interfaces';
import * as authActions from '../../store/auth-store/auth.actions';

@Component({
  selector: 'app-auth-form',
  templateUrl: 'auth-form.component.html',
})
export class AuthFormComponent implements OnInit {
  @Input() title?: string;
  @Input() description?: string;
  @Output() authHandler = new EventEmitter<{
    email: string;
    password: string;
  }>();
  signupForm: FormGroup = new FormGroup({});

  constructor(private store$: Store<AppStateInterface>) {}

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

  submitHandler() {
    this.store$.dispatch(authActions.startLoadingAction());
    this.authHandler.emit({
      email: this.signupForm.value.email,
      password: this.signupForm.value.password,
    });
    this.signupForm.reset({
      email: '',
      password: '',
    });
  }
}
