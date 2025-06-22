import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENDPOINTS } from '../constants/endpoints';
import { TDoctor } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private http = inject(HttpClient);

  getDoctors(): Observable<TDoctor[]> {
    return this.http.get<TDoctor[]>(ENDPOINTS.doctors);
  }
}
