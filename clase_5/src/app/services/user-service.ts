import { Injectable } from '@angular/core';
import { User } from '../users/interface/User';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersSubject = new BehaviorSubject<User[]>([]);
  user$ = this.usersSubject.asObservable();

  private userEdit = new BehaviorSubject<User | null>(null);
  userEdit$ = this.userEdit.asObservable();

  userList: User[] = [
    { id: 1, nombre: 'norma', apellido: 'garcia', email: 'norma@exemplo.com' },
    { id: 2, nombre: 'juan', apellido: 'perez', email: 'juan@exemplo.com' },
    { id: 3, nombre: 'norka', apellido: 'torres', email: 'norka@exemplo.com' },
    { id: 4, nombre: 'milena', apellido: 'malheiros', email: 'milena@exemplo.com' },
    { id: 5, nombre: 'flavio', apellido: 'machado', email: 'flavio@exemplo.com' },
    { id: 6, nombre: 'jorge', apellido: 'augusto', email: 'j orge@exemplo.com' },
    { id: 7, nombre: 'eduardo', apellido: 'garcia', email: 'eduardo@exemplo.com' },
    { id: 8, nombre: 'ricardo', apellido: 'pereira', email: 'ricardo@exemplo.com' },
    { id: 9, nombre: 'roberto', apellido: 'silva', email: 'roberto@exemplo.com' },
    { id: 10, nombre: 'cristiano', apellido: 'pereira', email: 'cristiano@exemplo.com' },
    { id: 11, nombre: 'alfredo', apellido: 'silva', email: 'roberto@exemplo.com' },

  ];

  getUsers() {
    this.usersSubject.next([...this.userList]);
  }
  addUser(user: User) {
    console.log("Servicio", user);

    this.userList.push({
      ...user,
      id: this.userList[this.userList.length - 1].id + 1,
    });
    this.usersSubject.next([...this.userList]);
  }

  setUpdateUser(id: number): void {
    const user: User | null = this.userList.find(u => u.id === id) || null;
    this.userEdit.next(user);
  }

  updateUser(id: number, data: User) {
    let index = this.userList.findIndex((u) => u.id === id);

    if (index === -1) {
      return undefined;
    }

    this.userList[index] = {
      ...this.userList[index],
      ...data
    };
    this.usersSubject.next([...this.userList]);
  }

  deleteUser(id: number) {
    this.userList = this.userList.filter((u) => u.id !== id);
    this.usersSubject.next([...this.userList]);
  }
}


