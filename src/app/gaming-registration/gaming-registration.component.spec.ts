import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamingRegistrationComponent } from './gaming-registration.component';

describe('GamingRegistrationComponent', () => {
  let component: GamingRegistrationComponent;
  let fixture: ComponentFixture<GamingRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamingRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamingRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
