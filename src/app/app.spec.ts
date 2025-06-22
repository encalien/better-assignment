import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { HttpClient } from '@angular/common/http';

describe('App', () => {
  beforeEach(async () => {
    const spy = jasmine.createSpyObj('HttpClient', ['get']);

    await TestBed.configureTestingModule({
      imports: [App],
      providers: [{ provide: HttpClient, useValue: spy }],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
