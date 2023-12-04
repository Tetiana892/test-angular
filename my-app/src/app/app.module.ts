import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PasswordStrengthIndicatorComponent } from './components/indicator/password.indicator';

@NgModule({
  declarations: [AppComponent, PasswordStrengthIndicatorComponent],
  imports: [BrowserModule, ReactiveFormsModule, CommonModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
