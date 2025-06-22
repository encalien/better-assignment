import { TestBed } from '@angular/core/testing';

import { ApiService } from './api';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { ENDPOINTS } from '../constants/endpoints';
import { doctors } from '../mocks/api.mock';

describe('Api', () => {
  let apiService: ApiService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      providers: [ApiService, { provide: HttpClient, useValue: spy }],
    });

    apiService = TestBed.inject(ApiService);
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  it('should be created', () => {
    expect(apiService).toBeTruthy();
  });

  it('should retrieve doctors list from API', () => {
    httpClientSpy.get.and.returnValue(of(doctors));

    apiService.getDoctors().subscribe((doctors) => {
      expect(doctors).toEqual(doctors);
    });

    expect(httpClientSpy.get.calls.count()).toBe(1);
    expect(httpClientSpy.get.calls.mostRecent().args[0]).toBe(
      ENDPOINTS.doctors
    );

    apiService.getDoctors().subscribe((doctors) => {
      expect(doctors).toEqual(doctors);
    });
  });
});
