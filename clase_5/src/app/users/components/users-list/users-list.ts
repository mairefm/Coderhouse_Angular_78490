import { Component, EventEmitter, Input, Output, ViewChild, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { User } from '../../interface/User';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { UserService } from '../../../services/user-service';

@Component({
  selector: 'app-users-list',
  standalone: false,
  templateUrl: './users-list.html',
  styleUrl: './users-list.css'
})

export class UserList {
  @Input() users: User[] = [];


  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'email', 'acciones'];
  dataSource = new MatTableDataSource<User>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private usersService: UserService) {
    this.usersService.user$.subscribe(users => {
      this.dataSource.data = users;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.usersService.getUsers();
  }

  onEditUser(id: number) {
    this.usersService.setUpdateUser(id);
  }


  onDeleteUser(id: number) {
    this.usersService.deleteUser(id);
  }
}

