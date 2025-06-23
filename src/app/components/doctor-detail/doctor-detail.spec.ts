import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorDetail } from './doctor-detail';
import { ApiService } from '../../services/api';
import { TDoctor, TTask } from '../../models';
import { of } from 'rxjs';
import { doctors, tasks as mockTasks } from '../../mocks/api.mock';

describe('DoctorDetail', () => {
  let component: DoctorDetail;
  let fixture: ComponentFixture<DoctorDetail>;
  let apiServiceSpy: jasmine.SpyObj<ApiService>;

  const loadComponent = (tasks: TTask[]) => {
    apiServiceSpy.getDoctorTasks.and.returnValue(
      of(tasks.filter((task) => task.userId === doctors[0].id))
    );

    fixture = TestBed.createComponent(DoctorDetail);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('doctor', doctors[0]);
    fixture.detectChanges();
  };

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('ApiService', ['getDoctorTasks']);

    await TestBed.configureTestingModule({
      imports: [DoctorDetail],
      providers: [{ provide: ApiService, useValue: spy }],
    }).compileComponents();

    apiServiceSpy = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
  });

  it('should create', () => {
    loadComponent([]);
    expect(component).toBeTruthy();
  });

  it('should display details and tasks when a doctor is selected', () => {
    loadComponent(mockTasks);

    const compiled = fixture.nativeElement as HTMLElement;
    console.log(compiled.innerHTML);

    expect(compiled.textContent).toContain(doctors[0].email);
    for (const task of mockTasks.filter(
      (task) => task.userId === doctors[0].id
    )) {
      expect(compiled.textContent).toContain(task.title);
    }
  });
});
