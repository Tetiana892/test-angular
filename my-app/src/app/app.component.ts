import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [ReactiveFormsModule, NgClass],
})
export class AppComponent {
  public form: FormGroup = new FormGroup({
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  public passwordStrength: 'empty' | 'easy' | 'medium' | 'strong' = 'empty';

  public onSubmit(): void {
    console.log(this.form.value);
    this.resetStrength();
  }

  public checkPasswordStrength(): void {
    const passwordControl = this.form.get('password');

    if (!passwordControl) {
      return;
    }
    const password = passwordControl.value;

    if (!password || password.length < 8) {
      // Якщо пароль порожній або менше 8 символів, всі розділи червоні
      this.passwordStrength = 'easy';
    } else if (
      /[a-zA-Z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[^a-zA-Z0-9]/.test(password)
    ) {
      // Якщо пароль містить літери, цифри та символи, він надійний (усі розділи зелені)
      this.passwordStrength = 'strong';
    } else if (/[a-zA-Z]/.test(password) && /[0-9]/.test(password)) {
      // Якщо пароль містить літери та цифри, він середній (перші два розділи жовті, останній сірий)
      this.passwordStrength = 'medium';
    } else {
      // Якщо пароль містить букви та цифри, він середній (перші два розділи жовті, останній сірий)
      this.passwordStrength = 'easy';
    }
  }
  private resetStrength(): void {
    this.passwordStrength = 'empty';
    this.form.reset();
  }
}
