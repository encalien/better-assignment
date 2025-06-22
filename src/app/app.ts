import { Component } from '@angular/core';
import { DoctorList } from './components/doctor-list/doctor-list';

@Component({
  selector: 'app-root',
  imports: [DoctorList],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
