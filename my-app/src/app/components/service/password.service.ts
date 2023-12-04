import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordStrengthService {
  checkPasswordStrength(
    password: string
  ): 'empty' | 'easy' | 'medium' | 'strong' {
    if (!password || password.length < 8) {
      // Якщо пароль порожній або менше 8 символів, всі розділи червоні
      return 'easy';
    } else if (
      /[a-zA-Z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[^a-zA-Z0-9]/.test(password)
    ) {
      // Якщо пароль містить літери, цифри та символи, він надійний (усі розділи зелені)
      return 'strong';
    } else if (/[a-zA-Z]/.test(password) && /[0-9]/.test(password)) {
      // Якщо пароль містить літери та цифри, він середній (перші два розділи жовті, останній сірий)
      return 'medium';
    } else {
      // Якщо пароль містить букви та цифри, він середній (перші два розділи жовті, останній сірий)
      return 'easy';
    }
  }
}
