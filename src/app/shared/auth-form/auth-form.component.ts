import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-auth-form',
  templateUrl: 'auth-form.component.html',
})
export class AuthFormComponent {
  @Input() title?: string;
  @Input() description?: string;
}
