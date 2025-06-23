import { Component } from '@angular/core';
import { TDoctor } from './models';
import { DoctorList } from './components/doctor-list/doctor-list';
import { DoctorDetail } from './components/doctor-detail/doctor-detail';

@Component({
  selector: 'app-root',
  imports: [DoctorList, DoctorDetail],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  selectedDoctor: TDoctor | null = null;

  onSelectDoctor(doctor: TDoctor) {
    this.selectedDoctor = doctor;
  }
}
