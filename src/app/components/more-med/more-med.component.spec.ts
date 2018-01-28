import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreMedComponent } from './more-med.component';

describe('MoreMedComponent', () => {
  let component: MoreMedComponent;
  let fixture: ComponentFixture<MoreMedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreMedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreMedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
