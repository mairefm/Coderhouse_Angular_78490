import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Users } from './users';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersList } from './components/users-list/users-list';
import { UsersForm } from './components/users-form/users-form';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatAnchor, MatButton, MatButtonModule } from "@angular/material/button";
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../shared/shared-module';

@NgModule({
  declarations: [
    Users,
    UsersList,
    UsersForm
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    SharedModule
  ],
  exports: [
    Users
  ]
})
export class UsersModule { }
