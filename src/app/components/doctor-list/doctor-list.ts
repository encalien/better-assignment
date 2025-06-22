import { Component, inject } from '@angular/core';
import { ApiService } from '../../services/api';
import { TDoctor } from '../../models';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-doctor-list',
  imports: [AsyncPipe],
  templateUrl: './doctor-list.html',
  styleUrl: './doctor-list.scss',
})
export class DoctorList {
  private apiService = inject(ApiService);
  doctors$: Observable<TDoctor[]> = this.apiService.getDoctors();
}
