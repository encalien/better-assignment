import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENDPOINTS } from '../constants/endpoints';
import { TDoctor, TTask } from '../models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private http = inject(HttpClient);

  getDoctors(): Observable<TDoctor[]> {
    return this.http.get<TDoctor[]>(ENDPOINTS.doctors);
  }

  getDoctorTasks(doctorId: number): Observable<any> {
    return this.http.get<TTask[]>(ENDPOINTS.doctorTasks(doctorId));
  }
}
