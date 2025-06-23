import { Component, effect, inject, input } from '@angular/core';
import { TDoctor, TTask } from '../../models';
import { Observable, of } from 'rxjs';
import { ApiService } from '../../services/api';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-doctor-detail',
  imports: [AsyncPipe],
  templateUrl: './doctor-detail.html',
  styleUrl: './doctor-detail.scss',
})
export class DoctorDetail {
  private apiService = inject(ApiService);

  doctor = input<TDoctor | null>();
  tasks$: Observable<TTask[]> = of([]);

  constructor() {
    effect(() => {
      const doctor = this.doctor();
      this.tasks$ = doctor?.id
        ? this.apiService.getDoctorTasks(doctor.id)
        : of([]);
    });
  }
}
