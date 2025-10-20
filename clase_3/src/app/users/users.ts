import { Component } from '@angular/core';
import { User } from './interface/User';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.html',
  styleUrl: './users.css'
})

export class Users {

  nombre: string = 'Mairê';
  apellido: string = 'Malheiros';
  edad: number = 30;

  h1Style = "font-size: 35px; color: aquamarine;"

  users: User[] = [
    { nombre: 'Norma', apellido: 'Garcia', email: 'norma@exemplo.com' },
    { nombre: 'Juan', apellido: 'Perez', email: 'juan@exemplo.com' },
    { nombre: 'Norka', apellido: 'Torres', email: 'norka@exemplo.com' },
  ];

  onAddUser(user: User) {
    this.users.push(user);
  }

}