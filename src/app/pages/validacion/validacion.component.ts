import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-validacion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './validacion.component.html',
  styleUrls: ['./validacion.component.css']
})
export class ValidacionComponent {

  nombre: string = '';
  email: string = '';
  password: string = '';
  nombreError: string = '';
  emailError: string = '';
  passwordError: string = '';

  validarFormulario(event: Event): void {
    event.preventDefault();

    this.nombreError = this.nombre.trim() === '' ? 'Por favor, introduce tu nombre' : '';
    this.emailError = this.validarEmail(this.email) ? '' : 'Por favor, introduce un correo electrónico válido';
    this.passwordError = this.validarPassword(this.password) ? '' : 'Por favor, introduce una contraseña válida';
  }

  private validarEmail(email: string): boolean {
    const emailPattern = /\w+@\w+\.[a-z]{2,}$/;
    return emailPattern.test(email);
  }

  private validarPassword(password: string): boolean {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&#.$($)$-$_]{8,15}$/;
    return passwordPattern.test(password);
  }
}