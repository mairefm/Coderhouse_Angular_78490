import { Component, EventEmitter, Output } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../interface/User';

@Component({
  selector: 'app-users-form',
  standalone: false,
  templateUrl: './users-form.html',
  styleUrl: './users-form.css'
})
export class UsersForm {
  public userForm: FormGroup;

  @Output() sendUser = new EventEmitter<User>();

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      apellido: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
    })
  }
  onSubmit() {
    if (this.userForm.invalid) {
      alert('El formulario es invalido');
      return
    }
    this.sendUser.emit(this.userForm.value);
  }
  get isNameInvalid() {
    return this.userForm.controls['nombre'].dirty && this.userForm.controls['nombre'].invalid;
  }
  get isApellidoInvalid() {
    return this.userForm.controls['apellido'].dirty && this.userForm.controls['apellido'].invalid;
  }
  get isEmailInvalid() {
    return this.userForm.controls['email'].dirty && this.userForm.controls['email'].invalid;
  }
}

