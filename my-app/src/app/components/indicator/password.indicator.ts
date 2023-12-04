import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-password-indicator',
  template: './password.indicator.html',
  styleUrls: ['./password.indicator.scss'],
})
export class PasswordStrengthIndicatorComponent {
  @Input() passwordStrength: 'empty' | 'easy' | 'medium' | 'strong' = 'empty';
}
