import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorList } from './doctor-list';
import { ApiService } from '../../services/api';
import { doctors } from '../../mocks/api.mock';
import { of } from 'rxjs';
import { TDoctor } from '../../models';

describe('DoctorList', () => {
  let component: DoctorList;
  let fixture: ComponentFixture<DoctorList>;
  let apiServiceSpy: jasmine.SpyObj<ApiService>;

  const loadComponent = (doctors: TDoctor[]) => {
    apiServiceSpy.getDoctors.and.returnValue(of(doctors));

    fixture = TestBed.createComponent(DoctorList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  };

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('ApiService', ['getDoctors']);

    await TestBed.configureTestingModule({
      imports: [DoctorList],
      providers: [{ provide: ApiService, useValue: spy }],
    }).compileComponents();

    apiServiceSpy = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
  });

  it('should create', () => {
    loadComponent(doctors);

    expect(component).toBeTruthy();
  });

  it('should render doctor names when API returns doctors', async () => {
    loadComponent(doctors);

    const compiled = fixture.nativeElement as HTMLElement;

    doctors.forEach((doctor) => {
      expect(compiled.textContent).toContain(doctor.name);
    });
  });

  it('should render no names when API returns empty array', async () => {
    loadComponent([]);

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('There are no doctors.');

    doctors.forEach((doctor) => {
      expect(compiled.textContent).not.toContain(doctor.name);
    });
  });
});
