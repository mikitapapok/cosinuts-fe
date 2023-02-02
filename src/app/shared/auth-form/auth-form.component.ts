import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  ngOnInit() {
    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  submitHandler() {
    if (this.signupForm.valid) {
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
}
