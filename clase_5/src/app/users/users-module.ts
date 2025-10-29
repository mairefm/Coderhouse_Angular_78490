import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Users } from './users';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersForm } from './components/users-form/users-form';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatAnchor, MatButton, MatButtonModule } from "@angular/material/button";
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../shared/shared-module';
import { UserService } from '../services/user-service';
import { UserList } from './components/users-list/users-list';

@NgModule({
  declarations: [
    Users,
    UserList,
    UsersForm,
  ],
  providers: [UserService],
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
