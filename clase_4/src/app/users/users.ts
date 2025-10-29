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
    { id: 1, nombre: 'norma', apellido: 'garcia', email: 'norma@exemplo.com' },
    { id: 2, nombre: 'juan', apellido: 'perez', email: 'juan@exemplo.com' },
    { id: 3, nombre: 'norka', apellido: 'torres', email: 'norka@exemplo.com' },
    { id: 4, nombre: 'milena', apellido: 'malheiros', email: 'milena@exemplo.com' },
    { id: 5, nombre: 'flavio', apellido: 'machado', email: 'flavio@exemplo.com' },
    { id: 6, nombre: 'jorge', apellido: 'augusto', email: 'jorge@exemplo.com' },
    { id: 7, nombre: 'eduardo', apellido: 'garcia', email: 'eduardo@exemplo.com' },
    { id: 8, nombre: 'ricardo', apellido: 'pereira', email: 'ricardo@exemplo.com' },
    { id: 9, nombre: 'roberto', apellido: 'silva', email: 'roberto@exemplo.com' },
    { id: 10, nombre: 'cristiano', apellido: 'pereira', email: 'cristiano@exemplo.com' },
    { id: 11, nombre: 'alfredo', apellido: 'silva', email: 'roberto@exemplo.com' },

  ];
  onAddUser(user: User) {
    console.log(user);

    this.users.push({
      ...user,
      id: this.users[this.users.length - 1].id + 1
    });
  };
}

