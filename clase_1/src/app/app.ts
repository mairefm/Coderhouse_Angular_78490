import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { Toolbar } from './toolbar/toolbar';
import { Student } from './student/student';

@Component({
  selector: 'app-root',
  imports: [Navbar, Toolbar, Student],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('coder');
}
