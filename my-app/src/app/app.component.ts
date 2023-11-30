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
  form: FormGroup = new FormGroup({
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
  passwordStrength: 'empty' | 'easy' | 'medium' | 'strong' = 'empty';

  onSubmit() {
    console.log(this.form.value);
    // this.resetStrength();
    this.form.reset();
  }

  checkPasswordStrength() {
    const passwordControl = this.form.get('password');

    if (!passwordControl) {
      return;
    }
    const password = passwordControl.value;

    if (!password || password.length < 8) {
      // Если пароль пустой или менее 8 символов, все разделы красные
      this.passwordStrength = 'easy';
    } else if (
      /[a-zA-Z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[^a-zA-Z0-9]/.test(password)
    ) {
      // Если пароль содержит буквы, цифры и символы, он надежный (все разделы зеленые)
      this.passwordStrength = 'strong';
    } else if (/[a-zA-Z]/.test(password) && /[0-9]/.test(password)) {
      // Если пароль содержит буквы и цифры, он средний (первые два раздела желтые, последний серый)
      this.passwordStrength = 'medium';
    } else {
      // В противном случае пароль простой (первый раздел красный, остальные серые)
      this.passwordStrength = 'easy';
    }
  }
  // resetStrength() {
  //   this.passwordStrength = 'empty';
  // }
}
