import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlineUserDashboardComponent } from './airline-user-dashboard.component';

describe('AirlineUserDashboardComponent', () => {
  let component: AirlineUserDashboardComponent;
  let fixture: ComponentFixture<AirlineUserDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirlineUserDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirlineUserDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
