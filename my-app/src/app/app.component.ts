import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { NgClass } from '@angular/common';
import { PasswordStrengthService } from './components/service/password.service';

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
  constructor(private passwordStrengthService: PasswordStrengthService) {}

  public onSubmit(): void {
    console.log(this.form.value);
    this.resetStrength();
  }

  public checkPasswordStrength(): void {
    const passwordControl = this.form.get('password');
    if (!passwordControl || passwordControl.value === undefined) {
      return;
    }
    const password = passwordControl.value;
    this.passwordStrength =
      this.passwordStrengthService.checkPasswordStrength(password);
  }
  private resetStrength(): void {
    this.passwordStrength = 'empty';
    this.form.reset();
  }
}
