import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Users } from './users';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersList } from './components/users-list/users-list';
import { UsersForm } from './components/users-form/users-form';



@NgModule({
  declarations: [
    Users,
    UsersList,
    UsersForm
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    Users
  ]
})
export class UsersModule { }
